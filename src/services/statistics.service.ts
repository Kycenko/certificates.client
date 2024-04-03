import instance from '@/api/api.instance'

import { IGetDepartmentReport } from '../types/statistics.types'

export const StatisticService = {
	async getDepartmentReport(id: string | undefined) {
		return instance.get<IGetDepartmentReport[]>(
			`/statistics/department-report/${id}`
		)
	}
}
