import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

import { GroupService } from '@/modules/groups/services/group.service.ts'
import { IGroup, TypeGroupForm } from '@/modules/groups/types/group.types.ts'
import { QUERY_KEYS } from '@/shared/constants/enums.ts'
import {
	createToast,
	deleteToast,
	editToast
} from '@/shared/constants/toasts.ts'

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

export const useGetGroups = (
	sortOrder: 'asc' | 'desc' = 'asc',
	department?: string,
	course?: string
) => {
	const {
		data: groups,
		isLoading,
		refetch
	} = useQuery({
		queryKey: [QUERY_KEYS.GROUPS, { sortOrder, department, course }],
		queryFn: async () => {
			const response: AxiosResponse<IGroup[]> = await GroupService.getAll(
				sortOrder,
				department,
				course
			)
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
