import { SERVICE_URL } from '@/lib/constants/enums'

import { IDepartmentReport, IGroupReport } from '@/types/reports.types'

import instance from '@/lib/api/api.instance'

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
	}
}
