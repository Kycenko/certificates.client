import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

import { StatisticService } from './statistics.service'
import { IStatistics } from './statistics.types'

export const useGetGroupStatistics = (id: string | undefined) => {
	const {
		data: groupStatistics,
		isLoading,
		refetch
	} = useQuery({
		queryKey: ['statistics'],
		queryFn: async () => {
			const response: AxiosResponse<IStatistics> =
				await StatisticService.getStatisticsByGroup(id)
			return response.data
		}
	})
	return { groupStatistics, isLoading, refetch }
}
