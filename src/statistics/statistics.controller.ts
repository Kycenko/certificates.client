import { Controller, Get, Param, Query } from '@nestjs/common'
import { StatisticsService } from './statistics.service'

@Controller('statistics')
export class StatisticsController {
	constructor(private readonly statisticsService: StatisticsService) {}

	@Get()
	async getStudentsWithMedicalCertificatesInRange(
		@Query('startDate') startDate: Date,
		@Query('endDate') endDate: Date
	) {
		return this.statisticsService.getStudentsWithMedicalCertificatesInRange(
			startDate,
			endDate
		)
	}

	@Get('group-report/:id')
	async getStatisticsByGroup(@Param('id') groupId: number) {
		return this.statisticsService.getStatisticsByGroup(groupId)
	}

	@Get('groups/:id')
	async getStatisticsForAllGroups(@Param('id') departmentId: number) {
		return this.statisticsService.getStatisticsForAllGroups(departmentId)
	}
}
