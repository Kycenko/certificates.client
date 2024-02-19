import { QUERY_KEYS } from '@shared/config/enums.ts'
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import toast from 'react-hot-toast'
import { UserService } from '.'
import { IUser, TypeUserForm } from './user.types'

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
		isSuccess
	} = useQuery({
		queryKey: [QUERY_KEYS.USERS, id],
		queryFn: async () => {
			const response: AxiosResponse<IUser> = await UserService.getById(id)
			return response.data
		}
	})
	return { user, isLoading, isSuccess }
}

// export const useFetchProfile = (id: number | string) => {
// 	return useQuery<IUser, Error>({
// 		queryKey: [QUERY_KEYS.USERS, id],
// 		queryFn: async () => {
// 			const response: AxiosResponse<IUser> = await UserService.getProfile(id)
// 			return response.data
// 		}
// 	})
// }

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
			toast.success('Пользователь успешно обновлен')
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
			toast.success('Пользователь успешно удален')
		}
	})
}
