import { Auth } from '@auth/decorators/auth.decorator'
import { Controller, Get, Param, Query } from '@nestjs/common'
import { ReportsService } from './reports.service'

@Controller('reports')
export class ReportsController {
	constructor(private readonly reportsService: ReportsService) {}

	//отчет по отделению
	@Auth('admin')
	@Get('department-report/:departmentId')
	async getDepartmentReport(
		@Param('departmentId') departmentId: number,
		@Query('sort') sort: 'asc' | 'desc' = 'asc',
		@Query('group') group?: string,
		@Query('hg') hg?: string,
		@Query('pe') pe?: string
	) {
		return this.reportsService.getDepartmentReport(
			departmentId,
			sort,
			group,
			hg,
			pe
		)
	}

	//отчет по группе
	@Auth('admin')
	@Get('group-report/:groupId')
	async getGroupReport(
		@Param('groupId') groupId: number,
		@Query('sort') sort: 'asc' | 'desc' = 'asc',
		@Query('hg') hg?: string,
		@Query('pe') pe?: string
	) {
		return this.reportsService.getGroupReport(groupId, sort, hg, pe)
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
		@Query('department') departmentId: number,
		@Query('course') courseId: number,
		@Query('pe') physicalEducationId: number,
		@Query('group') group?: string | undefined
	) {
		return this.reportsService.getPhysicalGroupCheckListReport(
			departmentId,
			courseId,
			physicalEducationId,
			group
		)
	}
}
