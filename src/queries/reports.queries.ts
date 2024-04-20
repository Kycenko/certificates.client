import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

import {
	IDepartmentReport,
	IGroupReport,
	IHealthReport
} from '@/types/reports.types'

import { ReportsService } from '@/services/reports.service.ts'

export const useGetDepartmentReport = (departmentId: string | undefined) => {
	const { data, isLoading } = useQuery<IDepartmentReport[]>({
		queryKey: ['department-report', { departmentId }],
		queryFn: async () => {
			const response: AxiosResponse =
				await ReportsService.getDepartmentReport(departmentId)
			return response.data
		}
	})
	return { data, isLoading }
}

export const useGetGroupReport = (groupId: string | undefined) => {
	const { data, isLoading } = useQuery<IGroupReport[]>({
		queryKey: ['group-report', groupId],
		queryFn: async () => {
			const response: AxiosResponse =
				await ReportsService.getGroupReport(groupId)
			return response.data
		}
	})
	return { data, isLoading }
}

export const useGetHealthReport = (
	departmentId: string | null,
	courseId: string | null,
	physicalEducationId: string | null
) => {
	const { data, isLoading } = useQuery<IHealthReport[]>({
		queryKey: [
			'check-list-report',
			{ departmentId, courseId, physicalEducationId }
		],
		queryFn: async () => {
			const response: AxiosResponse = await ReportsService.getHealthReport(
				departmentId,
				courseId,
				physicalEducationId
			)
			return response.data
		}
	})
	return { data, isLoading }
}
