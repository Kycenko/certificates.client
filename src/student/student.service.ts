import { PrismaService } from '@config/prisma.service'
import { Injectable, NotFoundException } from '@nestjs/common'
import { formatISO } from 'date-fns'
import { StudentDto } from './dto/student.dto'

@Injectable()
export class StudentService {
	constructor(private prisma: PrismaService) {}

	async create(dto: StudentDto) {
		return this.prisma.student.create({
			data: { ...dto, birthDate: formatISO(dto.birthDate) }
		})
	}

	async getAll(groupName?: string) {
		const whereCourse = groupName
			? {
					group: {
						name: groupName
					}
				}
			: {}

		const students = await this.prisma.student.findMany({
			where: whereCourse,
			include: {
				medicalCertificates: true,
				group: true
			}
		})

		if (!students || students.length === 0)
			throw new NotFoundException('Студенты не найдены!')
		return students
	}

	async getById(id: number) {
		const student = await this.prisma.student.findUnique({
			where: { id: +id },
			include: {
				medicalCertificates: {
					where: {
						studentId: +id
					}
				}
			}
		})
		if (!student) throw new NotFoundException('Студент не найден!')

		return student
	}

	async update(id: number, dto: StudentDto) {
		await this.getById(id)
		return this.prisma.student.update({
			where: { id: +id },
			data: { ...dto, birthDate: formatISO(dto.birthDate) }
		})
	}

	async delete(id: number) {
		await this.getById(id)
		await this.prisma.student.delete({ where: { id: +id } })
	}
}
