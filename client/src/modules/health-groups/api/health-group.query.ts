import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

import { HealthGroupService } from '@/modules/health-groups/api/health-group.service.ts'
import {
	IHealthGroup,
	TypeHealthGroupForm
} from '@/modules/health-groups/types/health-group.types.ts'
import { createToast, deleteToast, editToast } from '@/shared/helpers/toasts.ts'

export function useCreateHealthGroup() {
	const queryClient = new QueryClient()
	const { mutateAsync: create, isPending } = useMutation({
		mutationKey: ['create health-group'],
		mutationFn: (data: TypeHealthGroupForm) => HealthGroupService.create(data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['health-groups']
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
		queryKey: ['health-groups'],
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
		queryKey: ['health-group', id],
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
		mutationKey: ['update health-group'],
		mutationFn: async ({ id, data }) => {
			const response = await HealthGroupService.update(id, data)
			return response.data
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['health-groups'] })
			editToast()
		}
	})
	return { update, isPending }
}

export const useDeleteHealthGroup = () => {
	const queryClient = new QueryClient()
	const { mutateAsync: remove } = useMutation({
		mutationKey: ['delete health-group'],
		mutationFn: async (id: string | number) => {
			await HealthGroupService.delete(id)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['health-groups'] })
			deleteToast()
		}
	})
	return { remove }
}
