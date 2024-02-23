import {
	TypeGroupForm,
	useDeleteGroup,
	useGetGroups,
	useUpdateGroup
} from '@entities/Group'
import { Search } from '@features/Search'
import { SortOrder } from '@features/SortOrder'
import { GroupData } from '@features/data'
import { TableHeads } from '@features/heads'
import { GroupHeads, PAGES_URL } from '@shared/config'
import { useModal } from '@shared/hooks'
import { CustomLoader } from '@shared/ui'
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
		navigate(`${PAGES_URL.GROUPS}/${id}`)
	}

	if (isLoading) return <CustomLoader />
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
