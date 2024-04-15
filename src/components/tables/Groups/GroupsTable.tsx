import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Filter from '@/components/filters/Filter/Filter.tsx'
import Search from '@/components/filters/Search/Search.tsx'
import SortOrder from '@/components/filters/SortOrder/SortOrder.tsx'
import GroupData from '@/components/tables/Groups/GroupData.tsx'
import TableHeads from '@/components/tables/tablesHeads/TableHeads.tsx'

import { PAGES_URL } from '@/constants/enums.ts'
import { GroupHeads } from '@/constants/table-heads.ts'

import { IGroup, TypeGroupForm } from '@/types/group.types.ts'

import CourseOptions from '@/config/course.options.tsx'

import useModal from '@/hooks/useModal.ts'
import useSortAndFilterData from '@/hooks/useSortAndFilterData.ts'

import CustomLoader from '../../ui/loader/CustomLoader.tsx'

import styles from '@/app/styles/Tables.module.scss'
import {
	useDeleteGroup,
	useGetGroups,
	useUpdateGroup
} from '@/queries/group.queries.ts'

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
	window.history.pushState(null, '', `?filter=${filterValue}&sort=${sortOrder}`)

	if (isLoading) return <CustomLoader />
	return (
		<div className={styles.container}>
			<div className={styles.tableContainer}>
				<div className={styles.headerContainer}>
					<div className={styles.header}>
						<Search
							searchTerm={searchTerm}
							setSearchTerm={setSearchTerm}
							placeholder={'Поиск по названию группы...'}
						/>
						<SortOrder
							sortOrder={sortOrder}
							setSortOrder={setSortOrder}
						/>
						<Filter
							label='Фильтрация по номеру курса:'
							filterValue={filterValue}
							setFilterValue={setFilterValue}
						>
							<CourseOptions />
						</Filter>
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
