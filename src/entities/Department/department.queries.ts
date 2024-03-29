import { DepartmentService, IDepartment, TypeDepartmentForm } from '.'
import { QUERY_KEYS, createToast, deleteToast, editToast } from '@shared/config'
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

export const useCreateDepartment = () => {
	const queryClient = new QueryClient()
	const { mutateAsync: create, isPending } = useMutation({
		mutationFn: async (data: TypeDepartmentForm) => {
			const response = await DepartmentService.create(data)
			return response.data
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.DEPARTMENTS] })
			createToast()
		}
	})
	return { create, isPending }
}

export const useGetDepartments = () => {
	const {
		data: departments,
		isLoading,
		refetch
	} = useQuery({
		queryKey: [QUERY_KEYS.DEPARTMENTS],
		queryFn: async () => {
			const response: AxiosResponse<IDepartment[]> =
				await DepartmentService.getAll()
			return response.data
		}
	})
	return { departments, isLoading, refetch }
}

export const useGetDepartment = (id: string | undefined) => {
	const {
		data: department,
		isLoading,
		refetch
	} = useQuery({
		queryKey: [QUERY_KEYS.DEPARTMENTS, id],
		queryFn: async () => {
			const response: AxiosResponse<IDepartment> =
				await DepartmentService.getById(id)
			return response.data
		}
	})
	return { department, isLoading, refetch }
}

export const useUpdateDepartment = () => {
	const queryClient = new QueryClient()
	const { mutateAsync: update, isPending } = useMutation<
		IDepartment | undefined,
		Error,
		{ id: number | string; data: TypeDepartmentForm }
	>({
		mutationFn: async ({ id, data }) => {
			const response = await DepartmentService.update(id, data)
			return response.data
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.DEPARTMENTS] })
			editToast()
		}
	})
	return { update, isPending }
}

export const useDeleteDepartment = () => {
	const queryClient = new QueryClient()
	const { mutateAsync: remove } = useMutation({
		mutationFn: async (id: string | number) => {
			await DepartmentService.delete(id)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.DEPARTMENTS] })
			deleteToast()
		}
	})
	return { remove }
}
