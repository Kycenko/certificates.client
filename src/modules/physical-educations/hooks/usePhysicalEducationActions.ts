import { QueryObserverResult } from '@tanstack/react-query'
import { SubmitHandler, UseFormReset } from 'react-hook-form'

import {
	useCreatePhysicalEducation,
	useDeletePhysicalEducation,
	useUpdatePhysicalEducation
} from '@/modules/physical-educations/api/physical-education.queries.ts'
import {
	IPhysicalEducation,
	TypePhysicalEducationForm
} from '@/modules/physical-educations/types/physical-education.types.ts'

const usePhysicalEducationActions = (
	refetch: () => Promise<QueryObserverResult<IPhysicalEducation[], Error>>,
	reset: UseFormReset<TypePhysicalEducationForm>,
	closeModal: () => void
) => {
	const { create } = useCreatePhysicalEducation()
	const { update } = useUpdatePhysicalEducation()
	const { remove } = useDeletePhysicalEducation()

	const handleCreate: SubmitHandler<TypePhysicalEducationForm> = async data => {
		await create(data)
		closeModal()
		await refetch()
		reset()
	}

	const handleEdit = async (
		id: number | string,
		data: TypePhysicalEducationForm
	) => {
		try {
			await update({ id, data })
			closeModal()
			await refetch()
		} catch (error) {
			if (error?.response.status === 500) {
				alert('Название группы по физкультуре должно быть уникальным.')
			}
		}
	}

	const handleDelete = async (id: number | string) => {
		await remove(id)
		closeModal()
		await refetch()
	}

	return {
		handleCreate,
		handleEdit,
		handleDelete
	}
}

export default usePhysicalEducationActions
