import {
	IDepartmentReport,
	IGroupReport,
	IHealthReport
} from '@/modules/reports/types/reports.types.ts'
import instance from '@/shared/api/api.instance.ts'
import { SERVICE_URL } from '@/shared/constants/enums.ts'

export const ReportsService = {
	async getDepartmentReport(
		departmentId: string | undefined,
		sort: 'asc' | 'desc' = 'asc',
		groupId: string | undefined
	) {
		return instance.get<IDepartmentReport[]>(
			`${SERVICE_URL.REPORTS}/department-report/${departmentId}?sort=${sort}&group=${groupId}`
		)
	},

	async getGroupReport(
		groupId: string | undefined,
		sort: 'asc' | 'desc' = 'asc',
		hg?: string,
		pe?: string
	) {
		return instance.get<IGroupReport[]>(
			`${SERVICE_URL.REPORTS}/group-report/${groupId}?sort=${sort}&hg=${hg}&pe=${pe}`
		)
	},

	async getHealthReport(
		departmentId: string | null,
		courseId: string | null,
		physicalEducationId: string | null
	) {
		return instance.get<IHealthReport[]>(
			`${SERVICE_URL.REPORTS}/check-list-report?department=${departmentId}&course=${courseId}&physical-education=${physicalEducationId}`
		)
	}
}
