import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

import { ReportsService } from '@/modules/reports/api/reports.service.ts'
import {
	IDepartmentReport,
	IExpiredCertificatesReport,
	IGroupReport,
	IHealthGroupReport,
	IPhysicalEducationReport
} from '@/modules/reports/types/reports.types.ts'

export const useGetDepartmentReport = (
	departmentId: string | undefined,
	sort: 'asc' | 'desc' = 'asc',
	groupId?: string | undefined,
	hg?: string | undefined,
	pe?: string | undefined,
	startDate?: Date | string,
	finishDate?: Date | string
) => {
	const { data, isLoading } = useQuery<IDepartmentReport[]>({
		queryKey: [
			'department-report',
			{ departmentId, sort, groupId, hg, pe, startDate, finishDate }
		],
		queryFn: async () => {
			const response: AxiosResponse = await ReportsService.getDepartmentReport(
				departmentId,
				sort,
				groupId,
				hg,
				pe,
				startDate,
				finishDate
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
	pe?: string,
	startDate?: Date | string,
	finishDate?: Date | string
) => {
	const { data, isLoading } = useQuery<IGroupReport[]>({
		queryKey: [
			'group-report',
			{ groupId, sort, hg, pe, startDate, finishDate }
		],
		queryFn: async () => {
			const response: AxiosResponse = await ReportsService.getGroupReport(
				groupId,
				sort,
				hg,
				pe,
				startDate,
				finishDate
			)
			return response.data
		}
	})
	return { data, isLoading }
}

export const useGetHealthGroupReport = (
	departmentId: string | null,
	courseId: string | null,
	healthGroupId: string | null,
	sort: 'asc' | 'desc' = 'asc',
	group?: string | undefined
) => {
	const { data, isLoading } = useQuery<IHealthGroupReport[]>({
		queryKey: [
			'hg-check-list',
			{ departmentId, courseId, healthGroupId, sort, group }
		],
		queryFn: async () => {
			const response: AxiosResponse = await ReportsService.getHealthGroupReport(
				departmentId,
				courseId,
				healthGroupId,
				sort,
				group
			)
			return response.data
		}
	})
	return { data, isLoading }
}

export const useGetPhysicalEducationReport = (
	departmentId: string | null,
	courseId: string | null,
	physicalEducationId: string | null,
	sort: 'asc' | 'desc' = 'asc',
	group?: string | undefined
) => {
	const { data, isLoading } = useQuery<IPhysicalEducationReport[]>({
		queryKey: [
			'pg-check-list',
			{ departmentId, courseId, physicalEducationId, sort, group }
		],
		queryFn: async () => {
			const response: AxiosResponse =
				await ReportsService.getPhysicalEducationReport(
					departmentId,
					courseId,
					physicalEducationId,
					sort,
					group
				)
			return response.data
		}
	})
	return { data, isLoading }
}

export const useGetExpiredCertificatesReport = (
	sortOrder: 'asc' | 'desc' = 'asc',
	department?: string,
	course?: string,
	group?: string
) => {
	const { data, isLoading } = useQuery<IExpiredCertificatesReport[]>({
		queryKey: [
			'expired-certificates-report',
			{ sortOrder, department, course, group }
		],
		queryFn: async () => {
			const response: AxiosResponse =
				await ReportsService.getExpiredCertificatesReport(
					sortOrder,
					department,
					course,
					group
				)
			return response.data
		}
	})
	return { data, isLoading }
}
