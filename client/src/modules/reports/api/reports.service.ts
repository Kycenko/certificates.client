import {
	IDepartmentReport,
	IExpiredCertificatesReport,
	IGroupReport,
	IHealthGroupReport
} from '@/modules/reports/types/reports.types.ts'
import instance from '@/shared/api/api.instance.ts'
import { SERVICE_URL } from '@/shared/constants/enums.ts'

export const ReportsService = {
	async getDepartmentReport(
		departmentId: string | undefined,
		sort: 'asc' | 'desc' = 'asc',
		groupId?: string | undefined,
		hg?: string | undefined,
		pe?: string | undefined,
		startDate?: Date | string,
		finishDate?: Date | string
	) {
		return instance.get<IDepartmentReport[]>(
			`${SERVICE_URL.REPORTS}/department-report/${departmentId}?sort=${sort}&group=${groupId}&hg=${hg}&pe=${pe}&startDate=${startDate}&finishDate=${finishDate}`
		)
	},

	async getGroupReport(
		groupId: string | undefined,
		sort: 'asc' | 'desc' = 'asc',
		hg?: string,
		pe?: string,
		startDate?: Date | string,
		finishDate?: Date | string
	) {
		return instance.get<IGroupReport[]>(
			`${SERVICE_URL.REPORTS}/group-report/${groupId}?sort=${sort}&hg=${hg}&pe=${pe}&startDate=${startDate}&finishDate=${finishDate}`
		)
	},

	async getPhysicalEducationReport(
		departmentId: string | null,
		courseId: string | null,
		physicalEducationId: string | null,
		sort: 'asc' | 'desc' = 'asc',
		group?: string | undefined
	) {
		const groupParam = group ? `&group=${group}` : ''
		return instance.get<IExpiredCertificatesReport[]>(
			`${SERVICE_URL.REPORTS}/pe-check-list?department=${departmentId}&course=${courseId}&pe=${physicalEducationId}&sort=${sort}${groupParam}`
		)
	},
	async getHealthGroupReport(
		departmentId: string | null,
		courseId: string | null,
		healthGroupId: string | null,
		sort: 'asc' | 'desc' = 'asc',
		group?: string | undefined
	) {
		const groupParam = group ? `&group=${group}` : ''
		return instance.get<IHealthGroupReport[]>(
			`${SERVICE_URL.REPORTS}/hg-check-list?department=${departmentId}&course=${courseId}&hg=${healthGroupId}&sort=${sort}${groupParam}`
		)
	},

	async getExpiredCertificatesReport(
		sortOrder: 'asc' | 'desc' = 'asc',
		department?: string,
		course?: string,
		group?: string
	) {
		const departmentParam = department ? `&department=${department}` : ''
		const courseParam = course ? `&course=${course}` : ''
		const groupParam = group ? `&group=${group}` : ''

		return instance.get<IExpiredCertificatesReport[]>(
			`${SERVICE_URL.REPORTS}/expired-certificates-report?sort=${sortOrder}${departmentParam}${courseParam}${groupParam}`
		)
	}
}
