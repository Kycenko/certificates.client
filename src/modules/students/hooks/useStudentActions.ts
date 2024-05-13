import { QueryObserverResult } from '@tanstack/react-query'

import {
	useDeleteStudent,
	useUpdateStudent
} from '@/modules/students/api/student.queries.ts'
import {
	IStudent,
	TypeStudentForm
} from '@/modules/students/types/student.types.ts'
import useModal from '@/shared/hooks/useModal'

const useStudentActions = (
	refetch: () => Promise<QueryObserverResult<IStudent[], Error>>
) => {
	const { closeModal } = useModal()
	const { update } = useUpdateStudent()
	const { remove } = useDeleteStudent()

	const handleEdit = async (id: number | string, data: TypeStudentForm) => {
		await update({ id, data })
		closeModal()
		await refetch()
	}

	const handleDelete = async (id: number | string) => {
		await remove(id)
		closeModal()
		await refetch()
	}

	return {
		handleEdit,
		handleDelete
	}
}

export default useStudentActions
