import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'

import { StudentHistoryService } from '@/modules/students/api/student-history.service.ts'
import { TypeStudentHistoryForm } from '@/modules/students/types/student-history.types.ts'

export const useCreateStudentHistory = () => {
	const queryClient = new QueryClient()

	const { mutateAsync: create } = useMutation({
		mutationKey: ['create student-history'],
		mutationFn: async (data: TypeStudentHistoryForm) => {
			const response = await StudentHistoryService.create(data)
			return response.data
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['student-histories']
			})
		}
	})
	return { create }
}

export const useGetStudentHistories = (studentId: string | undefined) => {
	const {
		data: students,
		isLoading,
		refetch
	} = useQuery({
		queryKey: ['student-histories', studentId],
		queryFn: async () => {
			const response = await StudentHistoryService.getAll(studentId)
			return response.data
		}
	})
	return { students, isLoading, refetch }
}
