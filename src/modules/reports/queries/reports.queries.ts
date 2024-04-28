import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

import { ReportsService } from '@/modules/reports/services/reports.service.ts'
import {
	IDepartmentReport,
	IGroupReport,
	IHealthReport
} from '@/modules/reports/types/reports.types.ts'

export const useGetDepartmentReport = (
	departmentId: string | undefined,
	sort: 'asc' | 'desc' = 'asc',
	groupId: string | undefined
) => {
	const { data, isLoading } = useQuery<IDepartmentReport[]>({
		queryKey: ['department-report', { departmentId, sort, groupId }],
		queryFn: async () => {
			const response: AxiosResponse = await ReportsService.getDepartmentReport(
				departmentId,
				sort,
				groupId
			)
			return response.data
		}
	})
	return { data, isLoading }
}

export const useGetGroupReport = (
	groupId: string | undefined,
	sort: 'asc' | 'desc',
	hg?: string,
	pe?: string
) => {
	const { data, isLoading } = useQuery<IGroupReport[]>({
		queryKey: ['group-report', { groupId, sort, hg, pe }],
		queryFn: async () => {
			const response: AxiosResponse = await ReportsService.getGroupReport(
				groupId,
				sort,
				hg,
				pe
			)
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
