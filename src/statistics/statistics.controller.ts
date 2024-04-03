import { Controller, Get, Param, Query } from '@nestjs/common'
import { StatisticsService } from './statistics.service'

@Controller('statistics')
export class StatisticsController {
	constructor(private readonly statisticsService: StatisticsService) {}

	//отчет по обучающимся с указанием даты выдачи справки и сроком ее действия

	@Get('department-report/:id')
	async getDepartmentReport(@Param('id') departmentId: number) {
		return this.statisticsService.getDepartmentReport(departmentId)
	}

	//лист здоровья по для всех групп с указанием даты выдачи справки
	@Get('certificates-with-department-info/:id')
	async getStudentsCertificatesInfoWithDepartment(
		@Param('id') departmentId: number
	) {
		return this.statisticsService.getStudentsCertificatesInfoWithDepartment(
			departmentId
		)
	}
	@Get('certificates-with-group-info/:id')
	async getStudentsCertificatesInfoWithGroup(@Param('id') groupId: number) {
		return this.statisticsService.getStudentsCertificatesInfoWithGroup(groupId)
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
