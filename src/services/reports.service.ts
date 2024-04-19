import {
	IDepartmentReport,
	IGroupReport,
	IHealthReport
} from '@/types/reports.types'

import instance from '@/lib/api/api.instance'
import { SERVICE_URL } from '@/lib/constants/enums'

export const ReportsService = {
	async getDepartmentReport(departmentId: string | undefined) {
		return instance.get<IDepartmentReport[]>(
			`${SERVICE_URL.REPORTS}/department-report/${departmentId}`
		)
	},

	async getGroupReport(groupId: string | undefined) {
		return instance.get<IGroupReport[]>(
			`${SERVICE_URL.REPORTS}/group-report/${groupId}`
		)
	},

	async getHealthReport(
		departmentId: string | undefined,
		courseId: string | undefined,
		physicalEducationId: string | undefined
	) {
		return instance.get<IHealthReport[]>(
			`${SERVICE_URL.REPORTS}/check-list-report?department=${departmentId}&course=${courseId}&physical-education=${physicalEducationId}`
		)
	}
}
