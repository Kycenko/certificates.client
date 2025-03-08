import { QueryObserverResult } from '@tanstack/react-query'
import { SubmitHandler, UseFormReset } from 'react-hook-form'

import {
	useCreateHealthGroup,
	useDeleteHealthGroup,
	useUpdateHealthGroup
} from '@/modules/health-groups/api/health-group.query.ts'
import {
	IHealthGroup,
	TypeHealthGroupForm
} from '@/modules/health-groups/types/health-group.types.ts'

const useHealthGroupActions = (
	refetch: () => Promise<QueryObserverResult<IHealthGroup[], Error>>,
	reset: UseFormReset<TypeHealthGroupForm>,
	closeModal: () => void
) => {
	const { create } = useCreateHealthGroup()
	const { update } = useUpdateHealthGroup()
	const { remove } = useDeleteHealthGroup()
	const handleCreate: SubmitHandler<TypeHealthGroupForm> = async data => {
		await create(data)
		closeModal()
		await refetch()
		reset()
	}

	const handleEdit = async (id: string | number, data: TypeHealthGroupForm) => {
		try {
			await update({ id, data })
			closeModal()
			await refetch()
		} catch (error) {
			if (error?.response.status === 500) {
				alert('Название группы здоровья должно быть уникальным.')
			}
		}
	}

	const handleDelete = async (id: string | number) => {
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

export default useHealthGroupActions
