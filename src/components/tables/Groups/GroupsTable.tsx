import { useNavigate } from 'react-router-dom'

import Filter from '@/components/filters/Filter/Filter.tsx'
import Search from '@/components/filters/Search/Search.tsx'
import SortOrder from '@/components/filters/SortOrder/SortOrder.tsx'
import GroupData from '@/components/tables/Groups/GroupData.tsx'
import TableHeads from '@/components/tables/tablesHeads/TableHeads.tsx'

import { PAGES_URL } from '@/constants/enums.ts'
import { GroupHeads } from '@/constants/table-heads.ts'

import { TypeGroupForm } from '@/types/group.types.ts'

import useFilters from '@/hooks/useFilters.ts'
import useModal from '@/hooks/useModal.ts'

import CustomLoader from '../../ui/loader/CustomLoader.tsx'

import styles from '@/app/styles/Tables.module.scss'
import {
	useDeleteGroup,
	useGetGroups,
	useUpdateGroup
} from '@/queries/group.queries.ts'

const GroupsTable = () => {
	const { searchTerm, setSearchTerm, filterValue, setFilterValue } =
		useFilters()
	const navigate = useNavigate()
	const { groups, isLoading, refetch } = useGetGroups(filterValue)

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
						<Search
							searchTerm={searchTerm}
							setSearchTerm={setSearchTerm}
							placeholder={'Поиск по названию группы...'}
						/>
						<SortOrder />
						<Filter
							label='Фильтрация по номеру курса:'
							filterValue={filterValue}
							setFilterValue={setFilterValue}
						>
							<option
								key={0}
								value={''}
							>
								Все курсы
							</option>
							<option
								key={1}
								value={1}
							>
								1 курс
							</option>
							<option
								key={2}
								value={2}
							>
								2 курс
							</option>
							<option
								key={3}
								value={3}
							>
								3 курс
							</option>
							<option
								key={4}
								value={4}
							>
								4 курс
							</option>
						</Filter>
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
