import instance from '@shared/api/api.instance'
import { SERVICE_URL } from '@shared/config/enums.ts'

import { IStatistics } from './statistics.types'

export const StatisticService = {
	async getStatisticsByGroup(id: string | undefined) {
		return instance.get<IStatistics>(
			`/statistics/${SERVICE_URL.GROUP_REPORT}/${id}`
		)
	}
}
