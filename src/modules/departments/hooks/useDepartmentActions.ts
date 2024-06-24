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
	reset: UseFormReset<TypeDepartmentForm>
) => {
	const { create } = useCreateDepartment()
	const { update } = useUpdateDepartment()
	const { remove } = useDeleteDepartment()
	const handleCreate: SubmitHandler<TypeDepartmentForm> = async data => {
		await create(data)
		await refetch()

		reset()
	}

	const handleEdit = async (id: number | string, data: TypeDepartmentForm) => {
		await update({ id, data })
		await refetch()
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
