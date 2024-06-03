import { PrismaService } from '@config/prisma.service'
import { Injectable, NotFoundException } from '@nestjs/common'
import { formatISO } from 'date-fns'
import { MedicalCertificateDto } from './dto/medical-certificate.dto'

@Injectable()
export class MedicalCertificateService {
	constructor(private prisma: PrismaService) {}

	async create(dto: MedicalCertificateDto) {
		return this.prisma.medicalCertificate.create({
			data: {
				...dto,
				startDate: formatISO(dto.startDate),
				finishDate: formatISO(dto.finishDate)
			}
		})
	}

	async getAll(
		pageNum: number = 1,
		pageSize: number,
		sortOrder: 'asc' | 'desc' = 'asc',
		department?: string,
		course?: number,
		group?: string,
		startDate?: Date | string,
		finishDate?: Date | string
	) {
		const skipCount = (pageNum - 1) * pageSize

		const totalRecords = await this.prisma.medicalCertificate.count({
			where: {
				student: {
					group: {
						name: group || undefined,
						course: {
							number: course || undefined,
							department: {
								name: department || undefined
							}
						}
					}
				}
			}
		})

		let whereStudent = {
			group: {
				course: course
					? {
							number: +course,
							department: {
								name: department
							}
						}
					: {
							number: undefined,
							department: {
								name: department
							}
						},
				name: group
			}
		}

		let whereCertificates = {
			student: {
				group: {
					course: course
						? {
								number: +course,
								department: {
									name: department
								}
							}
						: {
								number: undefined,
								department: {
									name: department
								}
							},
					name: group
				}
			},
			startDate: startDate ? { gte: new Date(startDate) } : undefined,
			finishDate: finishDate ? { lte: new Date(finishDate) } : undefined
		}

		const studentsIds = await this.prisma.student
			.findMany({
				orderBy: { surname: sortOrder },
				skip: skipCount,
				take: +pageSize,
				select: {
					id: true
				},
				where: whereStudent
			})
			.then(students => students.map(student => student.id))

		const latestCertificatesPromises = studentsIds.map(studentId => {
			return this.prisma.medicalCertificate.findFirst({
				orderBy: { startDate: 'desc' },

				where: {
					...whereCertificates,
					studentId: +studentId
				},
				select: {
					id: true,
					studentId: true,
					startDate: true,
					finishDate: true,
					student: {
						select: {
							surname: true,
							name: true,
							secondName: true,
							birthDate: true,
							group: {
								select: {
									name: true,
									course: {
										select: {
											number: true,
											department: {
												select: {
													name: true
												}
											}
										}
									}
								}
							}
						}
					}
				}
			})
		})

		const latestCertificates = (
			await Promise.all(latestCertificatesPromises)
		).filter(certificate => certificate !== null)

		if (latestCertificates.length === 0)
			throw new NotFoundException('Медицинские справки не найдены!')

		return {
			data: latestCertificates,
			totalRecords,
			pageNum,
			pageSize,
			totalPages: Math.ceil(totalRecords / pageSize)
		}
	}

	async getById(id: number) {
		const medicalCertificate = await this.prisma.medicalCertificate.findUnique({
			where: { id: +id }
		})
		if (!medicalCertificate)
			throw new NotFoundException('Медицинская справка не найдена!')

		return medicalCertificate
	}

	async update(id: number, dto: MedicalCertificateDto) {
		await this.getById(id)
		return this.prisma.medicalCertificate.update({
			where: { id: +id },
			data: {
				...dto,
				startDate: formatISO(dto.startDate),
				finishDate: formatISO(dto.finishDate)
			}
		})
	}

	async delete(id: number) {
		await this.getById(id)
		await this.prisma.medicalCertificate.delete({ where: { id: +id } })
	}
}
