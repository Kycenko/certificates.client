import { QueryObserverResult } from '@tanstack/react-query'

import {
	useDeleteStudent,
	useUpdateStudent
} from '@/modules/students/api/student.queries.ts'
import {
	IStudent,
	TypeStudentForm
} from '@/modules/students/types/student.types.ts'

const useStudentActions = (
	refetch: () => Promise<
		QueryObserverResult<
			{
				data: IStudent[]
				totalPages: number
				totalRecords: number
			},
			Error
		>
	>
) => {
	const { update } = useUpdateStudent()
	const { remove } = useDeleteStudent()

	const handleEdit = async (id: number | string, data: TypeStudentForm) => {
		await update({ id, data })

		await refetch()
	}

	const handleDelete = async (id: number | string) => {
		await remove(id)

		await refetch()
	}

	return {
		handleEdit,
		handleDelete
	}
}

export default useStudentActions
