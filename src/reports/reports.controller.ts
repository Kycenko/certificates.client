import { Auth } from '@auth/decorators/auth.decorator'
import { Controller, Get, Param, Query } from '@nestjs/common'
import { ReportsService } from './reports.service'

@Controller('reports')
export class ReportsController {
	constructor(private readonly reportsService: ReportsService) {}

	//отчет по обучающимся отделения с указанием даты выдачи справки и сроком ее действия
	@Auth('admin')
	@Get('department-report/:departmentId')
	async getDepartmentReport(@Param('departmentId') departmentId: number) {
		return this.reportsService.getDepartmentReport(departmentId)
	}

	//отчет по группе с указанием даты выдачи справки и сроком ее действия
	@Auth('admin')
	@Get('group-report/:groupId')
	async getGroupReport(@Param('groupId') groupId: number) {
		return this.reportsService.getGroupReport(groupId)
	}

	// отчёт по истекшим справкам
	@Auth('admin')
	@Get('expired-certificates-report')
	async getExpiredCertificatesReport() {
		return this.reportsService.getExpiredCertificatesReport()
	}

	//лист здоровья
	@Auth('admin')
	@Get('check-list-report')
	async getPhysicalGroupCheckListReport(
		@Query('department') departmentName: string,
		@Query('course') courseNumber: number,
		@Query('health') healthName: string
	) {
		return this.reportsService.getPhysicalGroupCheckListReport(
			departmentName,
			courseNumber,
			healthName
		)
	}
}
