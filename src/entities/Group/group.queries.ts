import { QUERY_KEYS } from '@shared/config/enums.ts'
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import toast from 'react-hot-toast'

import { GroupService } from './group.service'
import { IGroup, TypeGroupForm } from './group.types'

export const useCreateGroup = () => {
	const queryClient = new QueryClient()
	const { mutateAsync: create, isPending } = useMutation({
		mutationFn: async (data: TypeGroupForm) => {
			const response = await GroupService.create(data)
			return response.data
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GROUPS] })
			toast.success('Группа успешно создана')
		}
	})
	return { create, isPending }
}

export const useGetGroups = () => {
	const {
		data: groups,
		isLoading,
		refetch
	} = useQuery({
		queryKey: [QUERY_KEYS.GROUPS],
		queryFn: async () => {
			const response: AxiosResponse<IGroup[]> = await GroupService.getAll()
			return response.data
		}
	})
	return { groups, isLoading, refetch }
}

export const useGetGroup = (id: string | undefined) => {
	const {
		data: group,
		isLoading,
		refetch
	} = useQuery({
		queryKey: [QUERY_KEYS.GROUPS, id],
		queryFn: async () => {
			const response: AxiosResponse<IGroup> = await GroupService.getById(id)
			return response.data
		}
	})
	return { group, isLoading, refetch }
}

export const useUpdateGroup = () => {
	const queryClient = new QueryClient()
	const { mutateAsync: update, isPending } = useMutation<
		IGroup | undefined,
		Error,
		{ id: number | string; data: TypeGroupForm }
	>({
		mutationFn: async ({ id, data }) => {
			const response = await GroupService.update(id, data)
			return response.data
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GROUPS] })
			toast.success('Группа успешно удалена')
		}
	})
	return { update, isPending }
}

export const useDeleteGroup = () => {
	const queryClient = new QueryClient()
	const { mutateAsync: remove, isPending } = useMutation({
		mutationFn: async (id: number | string) => {
			await GroupService.delete(id)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GROUPS] })
			toast.success('Группа успешно удалена')
		}
	})
	return { remove, isPending }
}
