import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

import { StatisticService } from './statistics.service'
import { IGetStatisticsByStudentsCertificates } from './statistics.types'

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

export const useGetStudentsCertificates = (id: string | undefined) => {
	const { data, isLoading } = useQuery<IGetStatisticsByStudentsCertificates[]>({
		queryKey: ['statistics', id],
		queryFn: async () => {
			const response: AxiosResponse =
				await StatisticService.getStatisticsByStudentsCertificates(id)
			return response.data
		}
	})
	return { data, isLoading }
}

export const useGetStudentsCertificatesWithDepartment = (
	id: string | undefined
) => {
	const { data, isLoading } = useQuery({
		queryKey: ['statistics', id],
		queryFn: async () => {
			const response: AxiosResponse =
				await StatisticService.getStatisticsByStudentsCertificatesWithDepartment(
					id
				)
			return response.data
		}
	})
	return { data, isLoading }
}
