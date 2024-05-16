import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

import { StudentService } from '@/modules/students/api/student.service.ts'
import {
	IStudent,
	TypeStudentForm
} from '@/modules/students/types/student.types.ts'
import { QUERY_KEYS } from '@/shared/constants/enums.ts'
import { createToast, deleteToast, editToast } from '@/shared/helpers/toasts.ts'

export const useUploadStudents = () => {
	const queryClient = new QueryClient()
	const { mutateAsync: create, isPending } = useMutation({
		mutationFn: async (data: TypeStudentForm[]) => {
			const response = await StudentService.upload(data)
			return response.data
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDENTS] })
			createToast()
		}
	})
	return { create, isPending }
}

export const useCreateStudent = () => {
	const queryClient = new QueryClient()
	const { mutateAsync: create, isPending } = useMutation({
		mutationFn: async (data: TypeStudentForm) => {
			const response = await StudentService.create(data)
			return response.data
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDENTS] })
			createToast()
		}
	})
	return { create, isPending }
}

export const useGetStudents = (
	page: number,
	limit: number,
	department?: string,
	course?: string,
	group?: string,
	isExpelled?: string
) => {
	const { data, isLoading, refetch } = useQuery({
		queryKey: [
			QUERY_KEYS.STUDENTS,
			{ page, limit, department, course, group, isExpelled }
		],
		queryFn: async () => {
			const response: AxiosResponse<{
				data: IStudent[]
				totalPages: number
				totalRecords: number
			}> = await StudentService.getAll(
				page,
				limit,
				department,
				course,
				group,
				isExpelled
			)
			return response.data
		}
	})

	const students = data?.data || []
	const totalPages = data?.totalPages || 0
	const totalRecords = data?.totalRecords || 0

	return {
		students,
		totalPages,
		totalRecords,
		isLoading,
		refetch
	}
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
			editToast()
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
			deleteToast()
		}
	})
	return { remove, isPending }
}
