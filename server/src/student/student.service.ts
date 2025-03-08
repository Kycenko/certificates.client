import { PrismaService } from '@config/prisma.service'
import { Injectable, NotFoundException } from '@nestjs/common'
import { formatISO } from 'date-fns'
import * as XLSX from 'xlsx'
import { StudentDto } from './dto/student.dto'

@Injectable()
export class StudentService {
	constructor(private prisma: PrismaService) {}

	async importStudents(file: Express.Multer.File) {
		const workbook = XLSX.read(file.buffer, {
			type: 'buffer',
			cellDates: true,
			cellNF: false,
			cellText: false
		})
		if (!file || !file.buffer) {
			throw new Error('Файл не был загружен или повреждён')
		}
		const sheetName = workbook.SheetNames[0]
		const worksheet = workbook.Sheets[sheetName]
		const data = XLSX.utils.sheet_to_json(worksheet) as Array<{
			name: string
			surname: string
			secondName: string
			birthDate: Date
		}>

		for (const item of data) {
			item.birthDate.setHours(item.birthDate.getHours() + 3)
			await this.prisma.student.create({
				data: {
					surname: item.surname,
					name: item.name,
					secondName: item.secondName || null,
					birthDate: formatISO(item.birthDate)
				}
			})
		}

		return { success: true, message: 'Обучающиеся добавлены', data: data }
	}

	async create(dto: StudentDto) {
		return this.prisma.student.create({
			data: { ...dto, birthDate: formatISO(dto.birthDate) }
		})
	}

	async getAll(
		pageNum: number = 1,
		pageSize: number,
		sortOrder: 'asc' | 'desc' = 'asc',
		department?: string,
		course?: number,
		group?: string,
		isExpelled?: string
	) {
		const skipCount = (pageNum - 1) * pageSize

		const whereCondition = {
			OR: [
				{
					isExpelled: isExpelled === 'true',
					group: {
						name: group || undefined,
						course: {
							number: +course || undefined,
							department: {
								name: department || undefined
							}
						}
					}
				},
				{ isExpelled: isExpelled === 'true' || undefined, groupId: null }
			]
		}

		const totalRecords = await this.prisma.student.count({
			where: whereCondition
		})

		const students = await this.prisma.student.findMany({
			orderBy: {
				surname: sortOrder
			},
			where: whereCondition,
			skip: skipCount,
			take: +pageSize,
			include: {
				medicalCertificates: true,
				group: {
					select: {
						name: true,
						course: {
							select: {
								number: true,
								department: true
							}
						}
					}
				}
			}
		})

		if (!students || students.length === 0)
			throw new NotFoundException('Обучающиеся не найдены!')
		return {
			data: students,
			totalRecords,
			pageNum,
			pageSize,
			totalPages: Math.ceil(totalRecords / pageSize)
		}
	}

	async getById(id: number) {
		const student = await this.prisma.student.findUnique({
			where: { id: +id },
			include: {
				medicalCertificates: {
					orderBy: {
						startDate: 'desc'
					},
					where: {
						studentId: +id
					}
				}
			}
		})
		if (!student) throw new NotFoundException('Обучающийся не найден!')

		return student
	}

	async update(id: number, dto: StudentDto) {
		await this.getById(id)
		return this.prisma.student.update({
			where: { id: +id },
			data: {
				...dto,
				birthDate: formatISO(dto.birthDate)
			}
		})
	}

	async delete(id: number) {
		await this.getById(id)
		await this.prisma.student.delete({ where: { id: +id } })
	}
}
