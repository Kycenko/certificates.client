import {QueryObserverResult} from '@tanstack/react-query'

import {useDeleteGroup, useUpdateGroup} from '@/modules/groups/api/group.queries.ts'
import {IGroup, TypeGroupForm} from '@/modules/groups/types/group.types.ts'
import useModal from '@/shared/hooks/useModal'

const useGroupActions = (
	refetch: () => Promise<QueryObserverResult<IGroup[], Error>>
) => {
	const { closeModal } = useModal()

	const { update } = useUpdateGroup()
	const { remove } = useDeleteGroup()

	const handleEdit = async (id: number | string, data: TypeGroupForm) => {
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

export default useGroupActions
