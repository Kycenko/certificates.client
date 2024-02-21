import { QUERY_KEYS } from '@shared/config/enums.ts'
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import toast from 'react-hot-toast'

import { StudentService } from './student.service'
import { IStudent, TypeStudentForm } from './student.types'

export const useCreateStudent = () => {
	const queryClient = new QueryClient()
	const { mutateAsync: create, isPending } = useMutation({
		mutationFn: async (data: TypeStudentForm) => {
			const response = await StudentService.create(data)
			return response.data
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDENTS] })
			toast.success('Студент успешно создан')
		}
	})
	return { create, isPending }
}

export const useGetStudents = () => {
	const {
		data: students,
		isLoading,
		refetch
	} = useQuery({
		queryKey: [QUERY_KEYS.STUDENTS],
		queryFn: async () => {
			const response: AxiosResponse<IStudent[]> = await StudentService.getAll()
			return response.data
		}
	})
	return { students, isLoading, refetch }
}

export const useGetStudent = (id: string | undefined) => {
	const {
		data: student,
		isLoading,
		refetch
	} = useQuery({
		queryKey: [QUERY_KEYS.STUDENTS, id],
		queryFn: async () => {
			const response: AxiosResponse<IStudent> = await StudentService.getById(id)
			return response.data
		}
	})
	return { student, isLoading, refetch }
}

export const useUpdateStudent = () => {
	const queryClient = new QueryClient()
	const { mutateAsync: update, isPending } = useMutation<
		IStudent | undefined,
		Error,
		{ id: number | string; data: TypeStudentForm }
	>({
		mutationFn: async ({ id, data }) => {
			const response = await StudentService.update(id, data)
			return response.data
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDENTS] })
			toast.success('Студент успешно изменен')
		}
	})
	return { update, isPending }
}

export const useDeleteStudent = () => {
	const queryClient = new QueryClient()
	const { mutateAsync: remove, isPending } = useMutation({
		mutationFn: async (id: number | string) => {
			await StudentService.delete(id)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDENTS] })
			toast.success('Студент успешно удален')
		}
	})
	return { remove, isPending }
}
