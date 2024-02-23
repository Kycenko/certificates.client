import { Controller, Get, Param, Query } from '@nestjs/common'
import { StatisticsService } from './statistics.service'

@Controller('statistics')
export class StatisticsController {
	constructor(private readonly statisticsService: StatisticsService) {}

	//отчет по обучающимся с указанием даты выдачи справки и сроком ее действия

	@Get('certificates-info/:id')
	async getStudentCertificatesInfo(@Param('id') groupId: number) {
		return this.statisticsService.getStudentCertificatesInfo(groupId)
	}

	//лист здоровья по для всех групп с указанием даты выдачи справки
	@Get('health-report')
	async getHealthReportForAllGroups() {
		return this.statisticsService.getHealthReportForAllGroups()
	}

	//отчеты за период времени/конкретную дату в разрезе различных показателей медицинских справок

	@Get()
	async getReportsForPeriod(
		@Query('startDate') startDate: Date,
		@Query('endDate') endDate: Date
	) {
		return this.statisticsService.getReportsForPeriod(startDate, endDate)
	}

	//приказ о группах по физической культуре для обучающихся
	@Get('physical-education-report')
	async getPhysicalEducationGroupsReport() {
		return this.statisticsService.getPhysicalEducationGroupsReport()
	}

	//список учащихся, срок действия медицинских справок которых истек (истекает через определенный промежуток времени)
	@Get('certificates-expiry-list/:daysUntilExpiry')
	async getCertificatesExpiryList(
		@Param('daysUntilExpiry') daysUntilExpiry: number
	) {
		return this.statisticsService.getCertificatesExpiryList(daysUntilExpiry)
	}

	// список наличия медицинских справок по группам и отделениям, статистический отчет по медицинским показателям в разрезе отделения или группы
}
