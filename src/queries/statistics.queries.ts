import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

<<<<<<< HEAD:src/queries/statistics.queries.ts
import { IGetStatisticsByStudentsCertificates } from '@/types/statistics.types'

import { StatisticService } from '@/services/statistics.service'
=======
import { StatisticService } from './statistics.service'
import {
	IGetStatisticsByStudentsCertificates,
	IGetStatisticsByStudentsCertificatesWithGroups
} from './statistics.types'
>>>>>>> 2f5ff3517175309caaa5c67a3f9e90183287eb2b:src/entities/Statistics/statistics.queries.ts

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
	const { data, isLoading } = useQuery<
		IGetStatisticsByStudentsCertificatesWithGroups[]
	>({
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
