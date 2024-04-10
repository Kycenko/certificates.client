import { useNavigate } from 'react-router-dom'

import GroupData from '@/components/tables/tablesData/GroupData'
import TableHeads from '@/components/tables/tablesHeads/TableHeads'

import { PAGES_URL } from '@/constants/enums'
import { GroupHeads } from '@/constants/table-heads.ts'

import { TypeGroupForm } from '@/types/group.types'

import useFilters from '@/hooks/useFilters'
import useModal from '@/hooks/useModal'

import FilterCourse from '../FilterCourse/FilterCourse'
import Search from '../Search/Search'
import SortOrder from '../SortOrder/SortOrder'
import CustomLoader from '../ui/loader/CustomLoader'

import styles from '@/app/styles/Tables.module.scss'
import {
	useDeleteGroup,
	useGetGroups,
	useUpdateGroup
} from '@/queries/group.queries'

const GroupsTable = () => {
	const { courseNumber } = useFilters()
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
						<Search placeholder={'Поиск по названию группы...'} />
						<SortOrder />
						<FilterCourse />
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
