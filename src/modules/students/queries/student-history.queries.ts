import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'

import { TypeStudentHistoryForm } from '@/modules/students/types/student-history.types.ts'

import { QUERY_KEYS } from '@/shared/constants/enums.ts'
import { StudentHistoryService } from '@/modules/students/services/student-history.service.ts'

export const useCreateStudentHistory = () => {
	const queryClient = new QueryClient()

	const { mutateAsync: create } = useMutation({
		mutationFn: async (data: TypeStudentHistoryForm) => {
			const response = await StudentHistoryService.create(data)
			return response.data
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.STUDENT_HISTORY]
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
		queryKey: [QUERY_KEYS.STUDENT_HISTORY, studentId],
		queryFn: async () => {
			const response = await StudentHistoryService.getAll(studentId)
			return response.data
		}
	})
	return { students, isLoading, refetch }
}
