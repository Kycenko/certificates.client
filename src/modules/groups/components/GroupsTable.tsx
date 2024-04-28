import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import GroupsFilters from './GroupsFilters.tsx'
import { GroupHeads } from './group-heads.ts'
import GroupData from '@/modules/groups/components/GroupData.tsx'
import {
	useDeleteGroup,
	useGetGroups,
	useUpdateGroup
} from '@/modules/groups/queries/group.queries.ts'
import { IGroup, TypeGroupForm } from '@/modules/groups/types/group.types.ts'
import TableHeads from '@/shared/components/tablesHeads/TableHeads.tsx'
import { PAGES_URL } from '@/shared/constants/enums.ts'
import useModal from '@/shared/hooks/useModal.ts'
import useSortAndFilterData from '@/shared/hooks/useSortAndFilterData.ts'
import styles from '@/shared/styles/Tables.module.scss'
import CustomLoader from '@/shared/ui/loader/CustomLoader.tsx'

const GroupsTable = () => {
	const navigate = useNavigate()
	const [searchTerm, setSearchTerm] = useState<string>('')
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
	const [filterValue, setFilterValue] = useState<string>('')

	const { groups, isLoading, refetch } = useGetGroups(filterValue, sortOrder)

	const { sortedData } = useSortAndFilterData(
		groups as IGroup[],
		searchTerm,
		sortOrder,
		'name'
	)
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
	window.history.pushState(null, '', `?course=${filterValue}&sort=${sortOrder}`)

	if (isLoading) return <CustomLoader />
	return (
		<div className={styles.container}>
			<div className={styles.tableContainer}>
				<div className={styles.headerContainer}>
					<div className={styles.header}>
						<GroupsFilters
							searchTerm={searchTerm}
							setSearchTerm={setSearchTerm}
							sortOrder={sortOrder}
							setSortOrder={setSortOrder}
							filterValue={filterValue}
							setFilterValue={setFilterValue}
						/>
					</div>
				</div>
				<table className={styles.table}>
					<thead className={styles.tHeads}>
						<TableHeads data={GroupHeads} />
					</thead>
					<tbody>
						<GroupData
							data={sortedData}
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
