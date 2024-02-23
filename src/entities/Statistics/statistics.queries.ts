import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

import { StatisticService } from './statistics.service'

export const useGetHealthReport = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['statistics'],
		queryFn: async () => {
			const response: AxiosResponse =
				await StatisticService.getStatisticsByGroup()
			return response.data
		}
	})
	return { data, isLoading }
}

export const useGetStudentCertificates = (id: string | undefined) => {
	const { data, isLoading } = useQuery({
		queryKey: ['statistics', id],
		queryFn: async () => {
			const response: AxiosResponse =
				await StatisticService.getStatisticsByStudentCertificates(id)
			return response.data
		}
	})
	return { data, isLoading }
}
