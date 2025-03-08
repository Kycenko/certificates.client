import { QueryObserverResult } from '@tanstack/react-query'

import {
	useDeleteCourse,
	useUpdateCourse
} from '@/modules/courses/api/course.queries.ts'
import {
	ICourse,
	TypeCourseForm
} from '@/modules/courses/types/course.types.ts'

const useCourseActions = (
	refetch: () => Promise<QueryObserverResult<ICourse[], Error>>
) => {
	const { update } = useUpdateCourse()
	const { remove } = useDeleteCourse()

	const handleEdit = async (id: number | string, data: TypeCourseForm) => {
		try {
			await update({
				id,
				data: {
					...data,
					number: +data.number
				}
			})

			await refetch()
		} catch (error) {
			if (error?.response.status === 500) {
				alert('Номер курса должен быть уникальным')
			}
		}
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
export default useCourseActions
