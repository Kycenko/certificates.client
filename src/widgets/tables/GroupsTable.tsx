import {
	useDeleteGroup,
	useGetGroups,
	useUpdateGroup
} from '@entities/Group/group.queries.ts'
import { TypeGroupForm } from '@entities/Group/group.types.ts'
import Search from '@features/Search/Search.tsx'
import SortOrder from '@features/SortOrder/SortOrder.tsx'
import TableHeads, { GroupHeads } from '@features/TableHeads.tsx'
import GroupData from '@features/data/GroupData'
import { useModal } from '@shared/hooks'
import Loader from '@shared/ui/loader/CustomLoader.tsx'
import { useNavigate } from 'react-router-dom'

import styles from '@shared/styles/Tables.module.scss'

const GroupsTable = () => {
	const navigate = useNavigate()
	const { groups, isLoading, refetch } = useGetGroups()

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

	const handleInfo = (id: number | string) => {
		navigate(`/groups/${id}`)
	}

	if (isLoading) return <Loader />
	return (
		<div className={styles.container}>
			<div className={styles.tableContainer}>
				<div className={styles.headerContainer}>
					<div className={styles.header}>
						<Search />
						<SortOrder />
					</div>
				</div>
				<table className={styles.table}>
					<thead className={styles.tHeads}>
						<TableHeads data={GroupHeads} />
					</thead>
					<tbody>
						<GroupData
							data={groups}
							onDelete={handleDelete}
							onEdit={handleEdit}
							onInfo={handleInfo}
						/>
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default GroupsTable
