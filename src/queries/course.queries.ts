import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

import { QUERY_KEYS } from '@/constants/enums'
import {
	createToast,
	deleteToast,
	editToast
} from '@/constants/notification-toasts.ts'

import { ICourse, TypeCourseForm } from '@/types/course.types'

import { CourseService } from '@/services/course.service'

export const useCreateCourse = () => {
	const queryClient = new QueryClient()
	const { mutateAsync: create, isPending } = useMutation({
		mutationFn: async (data: TypeCourseForm) => {
			const response = await CourseService.create(data)
			return response.data
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COURSES] })
			createToast()
		}
	})
	return { create, isPending }
}

export const useGetCourses = (departmentName?: string) => {
	const {
		data: courses,
		isLoading,
		refetch
	} = useQuery({
		queryKey: [QUERY_KEYS.COURSES, { departmentName }],
		queryFn: async () => {
			const response: AxiosResponse<ICourse[]> =
				await CourseService.getAll(departmentName)
			return response.data
		}
	})
	return { courses, isLoading, refetch }
}

export const useGetCourse = (id: string | undefined) => {
	const {
		data: course,
		isLoading,
		refetch
	} = useQuery({
		queryKey: [QUERY_KEYS.COURSES, id],
		queryFn: async () => {
			const response: AxiosResponse<ICourse> = await CourseService.getById(id)
			return response.data
		}
	})
	return { course, isLoading, refetch }
}

export const useUpdateCourse = () => {
	const queryClient = new QueryClient()
	const { mutateAsync: update, isPending } = useMutation<
		ICourse | undefined,
		Error,
		{ id: number | string; data: TypeCourseForm }
	>({
		mutationFn: async ({ id, data }) => {
			const response = await CourseService.update(id, data)
			return response.data
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COURSES] })
			editToast()
		}
	})
	return { update, isPending }
}

export const useDeleteCourse = () => {
	const queryClient = new QueryClient()
	const { mutateAsync: remove, isPending } = useMutation({
		mutationFn: async (id: number | string) => {
			await CourseService.delete(id)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COURSES] })
			deleteToast()
		}
	})
	return { remove, isPending }
}
