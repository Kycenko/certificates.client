import { HealthGroupService } from '@entities/HealthGroup/health-group.service.ts'
import {
	IHealthGroup,
	TypeHealthGroupForm
} from '@entities/HealthGroup/health-group.types.ts'
import { QUERY_KEYS } from '@shared/config/enums.ts'
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import toast from 'react-hot-toast'

export function useCreateHealthGroup() {
	const queryClient = new QueryClient()
	const { mutateAsync: create, isPending } = useMutation({
		mutationKey: ['create health-group'],
		mutationFn: (data: TypeHealthGroupForm) => HealthGroupService.create(data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.HEALTH_GROUPS]
			})
			toast.success('Группа здоровья успешно создана')
		}
	})

	return { create, isPending }
}

export const useGetHealthGroups = () => {
	const { data, isSuccess, isLoading, refetch } = useQuery({
		queryKey: [QUERY_KEYS.HEALTH_GROUPS],
		queryFn: async () => {
			const response: AxiosResponse<IHealthGroup[]> =
				await HealthGroupService.getAll()
			return response.data
		}
	})
	return { data, isSuccess, isLoading, refetch }
}

export const useGetHealthGroup = (id: string | number) => {
	const { data, isSuccess, isLoading } = useQuery({
		queryKey: [QUERY_KEYS.HEALTH_GROUPS, id],
		queryFn: async () => {
			const response: AxiosResponse<IHealthGroup> =
				await HealthGroupService.getById(id)
			return response.data
		}
	})
	return { data, isSuccess, isLoading }
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
			toast.success('Группа здоровья успешно изменена')
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
			toast.success('Группа здоровья успешно удалена')
		}
	})
	return { remove }
}
