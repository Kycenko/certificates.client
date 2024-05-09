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
		sortOrder: 'asc' | 'desc' = 'asc',
		department?: string,
		course?: number,
		group?: string
	) {
		const studentsIds = await this.prisma.student
			.findMany({
				orderBy: { surname: sortOrder },
				select: {
					id: true
				},
				where: {
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
			})
			.then(students => students.map(student => student.id))

		const latestCertificatesPromises = studentsIds.map(studentId => {
			return this.prisma.medicalCertificate.findFirst({
				orderBy: { startDate: 'desc' },

				where: {
					studentId: studentId,
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
					}
				},
				select: {
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

		return latestCertificates
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
