import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

import { ReportsService } from '@/modules/reports/services/reports.service.ts'
import {
	IDepartmentReport,
	IExpiredCertificatesReport,
	IGroupReport,
	IHealthReport
} from '@/modules/reports/types/reports.types.ts'

export const useGetDepartmentReport = (
	departmentId: string | undefined,
	sort: 'asc' | 'desc' = 'asc',
	groupId?: string | undefined,
	hg?: string | undefined,
	pe?: string | undefined
) => {
	const { data, isLoading } = useQuery<IDepartmentReport[]>({
		queryKey: ['department-report', { departmentId, sort, groupId, hg, pe }],
		queryFn: async () => {
			const response: AxiosResponse = await ReportsService.getDepartmentReport(
				departmentId,
				sort,
				groupId,
				hg,
				pe
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
	physicalEducationId: string | null,
	group?: string | undefined
) => {
	const { data, isLoading } = useQuery<IHealthReport[]>({
		queryKey: [
			'check-list-report',
			{ departmentId, courseId, physicalEducationId, group }
		],
		queryFn: async () => {
			const response: AxiosResponse = await ReportsService.getHealthReport(
				departmentId,
				courseId,
				physicalEducationId,
				group
			)
			return response.data
		}
	})
	return { data, isLoading }
}

export const useGetExpiredCertificatesReport = () => {
	const { data, isLoading } = useQuery<IExpiredCertificatesReport[]>({
		queryKey: ['expired-certificates-report'],
		queryFn: async () => {
			const response: AxiosResponse =
				await ReportsService.getExpiredCertificatesReport()
			return response.data
		}
	})
	return { data, isLoading }
}
