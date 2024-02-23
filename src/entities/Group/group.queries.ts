import { GroupService, IGroup, TypeGroupForm } from '.'
import { QUERY_KEYS, createToast, deleteToast, editToast } from '@shared/config'
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

export const useCreateGroup = () => {
	const queryClient = new QueryClient()
	const { mutateAsync: create, isPending } = useMutation({
		mutationFn: async (data: TypeGroupForm) => {
			const response = await GroupService.create(data)
			return response.data
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GROUPS] })
			createToast()
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
			editToast()
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
			deleteToast()
		}
	})
	return { remove, isPending }
}
