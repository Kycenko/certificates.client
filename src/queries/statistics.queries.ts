import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

import { IGetDepartmentReport } from '@/types/statistics.types'

import { StatisticService } from '@/services/statistics.service'

export const useGetDepartmentReport = (id: string | undefined) => {
	const { data, isLoading } = useQuery<IGetDepartmentReport[]>({
		queryKey: ['department-report', id],
		queryFn: async () => {
			const response: AxiosResponse =
				await StatisticService.getDepartmentReport(id)
			return response.data
		}
	})
	return { data, isLoading }
}
