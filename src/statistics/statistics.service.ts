import { Injectable } from '@nestjs/common'

import { PrismaService } from '@config/prisma.service'
import { endOfDay, startOfDay } from 'date-fns'

@Injectable()
export class StatisticsService {
	constructor(private prisma: PrismaService) {}

	//отчет по обучающимся с указанием даты выдачи справки и сроком ее действия

	async getStudentCertificatesInfo(groupId: number) {
		const studentsWithCertificates = await this.prisma.student.findMany({
			where: {
				groupId: +groupId
			},
			select: {
				name: true,
				surname: true,
				birthDate: true,
				medicalCertificates: {
					select: {
						id: true,
						startDate: true,
						finishDate: true
					}
				}
			}
		})

		return studentsWithCertificates
	}

	//лист здоровья по для всех групп с указанием даты выдачи справки
	async getHealthReportForAllGroups() {
		const healthReport = await this.prisma.healthGroup.findMany({
			select: {
				name: true,
				medicalCertificates: {
					select: {
						id: true,
						startDate: true
					}
				}
			}
		})

		return healthReport
	}

	//отчеты за период времени/конкретную дату в разрезе различных показателей медицинских справок
	async getReportsForPeriod(startDate: Date, endDate: Date) {
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

	//приказ о группах по физической культуре для обучающихся
	// StatisticsService
	async getPhysicalEducationGroupsReport() {
		const report = await this.prisma.physicalEducation.findMany({
			select: {
				name: true,
				medicalCertificates: {
					select: {
						id: true,
						startDate: true
					}
				}
			}
		})

		return report
	}

	//список учащихся, срок действия медицинских справок которых истек (истекает через определенный промежуток времени)
	async getCertificatesExpiryList(daysUntilExpiry: number) {
		const expiryList = await this.prisma.student.findMany({
			where: {
				medicalCertificates: {
					some: {
						finishDate: {
							lte: new Date(
								new Date().getTime() + daysUntilExpiry * 24 * 60 * 60 * 1000
							)
						}
					}
				}
			},
			select: {
				name: true,
				surname: true,
				birthDate: true,
				medicalCertificates: {
					select: {
						id: true,
						finishDate: true
					}
				}
			}
		})

		return expiryList
	}

	// список наличия медицинских справок по группам и отделениям, статистический отчет по медицинским показателям в разрезе отделения или группы
}
