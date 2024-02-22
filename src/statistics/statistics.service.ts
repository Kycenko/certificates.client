import { Injectable } from '@nestjs/common'

import { endOfDay, startOfDay } from 'date-fns'
import { PrismaService } from '@config/prisma.service'

@Injectable()
export class StatisticsService {
	constructor(private prisma: PrismaService) {}

	async getStudentsWithMedicalCertificatesInRange(
		startDate: Date,
		endDate: Date
	) {
		const startOfDayDate = startOfDay(startDate)
		const endOfDayDate = endOfDay(endDate)

		return this.prisma.student.findMany({
			include: {
				medicalCertificates: {
					where: {
						startDate: {
							lte: endOfDayDate
						},
						finishDate: {
							gte: startOfDayDate
						}
					}
				}
			}
		})
	}
	async getStatisticsForAllGroups(departmentId: number) {
		const studentsInAllGroups = this.prisma.student.findMany({
			where: {
				group: {
					course: {
						departmentId: +departmentId
					}
				}
			},
			select: {
				name: true,
				surname: true,
				secondName: true,
				birthDate: true,
				medicalCertificates: {
					select: {
						healthGroupId: true,
						physicalEducationId: true,
						finishDate: true
					}
				},
				group: {
					select: {
						course: {
							select: { number: true }
						}
					}
				}
			}
		})

		return studentsInAllGroups
	}

	async getStatisticsByGroup(groupId: number) {
		const studentsInGroup = this.prisma.student.findMany({
			where: {
				groupId: +groupId
			},
			select: {
				name: true,
				surname: true,
				secondName: true,
				birthDate: true,
				medicalCertificates: {
					select: {
						healthGroupId: true,
						physicalEducationId: true,
						finishDate: true
					}
				},
				group: {
					select: {
						course: {
							select: { number: true }
						}
					}
				}
			}
		})
		return studentsInGroup
	}

	async getCourseReport(reportType: string, sortBy: string) {}
}
