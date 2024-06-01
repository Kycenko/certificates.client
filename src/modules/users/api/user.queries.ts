import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

import { UserService } from '@/modules/users/api/user.service.ts'
import { IUser, TypeUserForm } from '@/modules/users/types/user.types.ts'
import { QUERY_KEYS } from '@/shared/constants/enums.ts'
import { deleteToast, editToast } from '@/shared/helpers/toasts.ts'

export const useGetUsers = () => {
	const {
		data: users,
		isLoading,
		refetch
	} = useQuery({
		queryKey: [QUERY_KEYS.USERS],
		queryFn: async () => {
			const response: AxiosResponse<IUser[]> = await UserService.getAll()
			return response.data
		}
	})
	return { users, isLoading, refetch }
}

export const useGetUser = (id: string | undefined) => {
	const {
		data: user,
		isLoading,
		isSuccess,
		refetch
	} = useQuery({
		queryKey: [QUERY_KEYS.USERS, id],
		queryFn: async () => {
			const response: AxiosResponse<IUser> = await UserService.getById(id)
			return response.data
		}
	})
	return { user, isLoading, isSuccess, refetch }
}

export const useUpdateUser = () => {
	const queryClient = new QueryClient()
	const { mutateAsync, isPending } = useMutation<
		IUser | undefined,
		Error,
		{ id: string | undefined; data: TypeUserForm }
	>({
		mutationFn: async ({ id, data }) => {
			const response = await UserService.update(id, data)
			return response.data
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USERS] })
			editToast()
		}
	})
	return { mutateAsync, isPending }
}

export const useDeleteUser = () => {
	const queryClient = new QueryClient()
	return useMutation({
		mutationFn: async (id: number | string) => {
			await UserService.delete(id)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USERS] })
			deleteToast()
		}
	})
}
