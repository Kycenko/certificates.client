import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

import { QUERY_KEYS } from '@/constants/enums'
import { createToast, deleteToast, editToast } from '@/constants/toasts'

import { IHealthGroup, TypeHealthGroupForm } from '@/types/health-group.types'

import { HealthGroupService } from '@/services/health-group.service'

export function useCreateHealthGroup() {
	const queryClient = new QueryClient()
	const { mutateAsync: create, isPending } = useMutation({
		mutationKey: ['create health-group'],
		mutationFn: (data: TypeHealthGroupForm) => HealthGroupService.create(data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.HEALTH_GROUPS]
			})
			createToast()
		}
	})

	return { create, isPending }
}

export const useGetHealthGroups = () => {
	const {
		data: healthGroups,
		isSuccess,
		isLoading,
		refetch
	} = useQuery({
		queryKey: [QUERY_KEYS.HEALTH_GROUPS],
		queryFn: async () => {
			const response: AxiosResponse<IHealthGroup[]> =
				await HealthGroupService.getAll()
			return response.data
		}
	})
	return { healthGroups, isSuccess, isLoading, refetch }
}

export const useGetHealthGroup = (id: string | number) => {
	const {
		data: healthGroup,
		isSuccess,
		isLoading
	} = useQuery({
		queryKey: [QUERY_KEYS.HEALTH_GROUPS, id],
		queryFn: async () => {
			const response: AxiosResponse<IHealthGroup> =
				await HealthGroupService.getById(id)
			return response.data
		}
	})
	return { healthGroup, isSuccess, isLoading }
}

export const useUpdateHealthGroup = () => {
	const queryClient = new QueryClient()
	const { mutateAsync: update, isPending } = useMutation<
		IHealthGroup | undefined,
		Error,
		{ id: string | number; data: TypeHealthGroupForm }
	>({
		mutationFn: async ({ id, data }) => {
			const response = await HealthGroupService.update(id, data)
			return response.data
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.HEALTH_GROUPS] })
			editToast()
		}
	})
	return { update, isPending }
}

export const useDeleteHealthGroup = () => {
	const queryClient = new QueryClient()
	const { mutateAsync: remove } = useMutation({
		mutationFn: async (id: string | number) => {
			await HealthGroupService.delete(id)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.HEALTH_GROUPS] })
			deleteToast()
		}
	})
	return { remove }
}
