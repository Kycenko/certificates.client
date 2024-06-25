import { QueryObserverResult } from '@tanstack/react-query'
import { SubmitHandler, UseFormReset } from 'react-hook-form'

import {
	useCreateDepartment,
	useDeleteDepartment,
	useUpdateDepartment
} from '@/modules/departments/api/department.queries.ts'
import {
	IDepartment,
	TypeDepartmentForm
} from '@/modules/departments/types/department.types.ts'

const useDepartmentActions = (
	refetch: () => Promise<QueryObserverResult<IDepartment[], Error>>,
	reset: UseFormReset<TypeDepartmentForm>,
	onClose: () => void
) => {
	const { create } = useCreateDepartment()
	const { update } = useUpdateDepartment()
	const { remove } = useDeleteDepartment()
	const handleCreate: SubmitHandler<TypeDepartmentForm> = async data => {
		try {
			await create(data)
			await refetch()
			reset()
			onClose()
		} catch (error) {
			if (error?.response.status === 500) {
				alert('Название отделения должно быть уникальным')
			}
		}
	}

	const handleEdit = async (id: number | string, data: TypeDepartmentForm) => {
		try {
			await update({ id, data })
			await refetch()
		} catch (error) {
			if (error?.response.status === 500) {
				alert('Название отделения должно быть уникальным')
			}
		}
	}

	const handleDelete = async (id: number | string) => {
		await remove(id)
		await refetch()
	}

	return {
		handleCreate,
		handleEdit,
		handleDelete
	}
}

export default useDepartmentActions
