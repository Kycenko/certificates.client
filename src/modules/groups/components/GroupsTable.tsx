import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import GroupsFilters from './GroupsFilters.tsx'
import { GroupHeads } from './group-heads.ts'
import { useGetDepartments } from '@/modules/departments/queries/department.queries.ts'
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
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
	const [departmentValue, setDepartmentValue] = useState<string>('')
	const [courseValue, setCourseValue] = useState<string>('')

	const { departments } = useGetDepartments()
	const { groups, isLoading, refetch } = useGetGroups(
		sortOrder,
		departmentValue,
		courseValue
	)

	const { sortedData, searchTerm, setSearchTerm } = useSortAndFilterData(
		groups as IGroup[],
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
	window.history.pushState(
		null,
		'',
		`?sort=${sortOrder}&department=${departmentValue}&course=${courseValue}&search=${searchTerm}`
	)

	if (isLoading) return <CustomLoader />
	return (
		<div className={styles.container}>
			<div className={styles.tableContainer}>
				<div className={styles.headerContainer}>
					<div className={styles.header}>
						<GroupsFilters
							departments={departments}
							searchTerm={searchTerm}
							setSearchTerm={setSearchTerm}
							sortOrder={sortOrder}
							setSortOrder={setSortOrder}
							departmentValue={departmentValue}
							setDepartmentValue={setDepartmentValue}
							courseValue={courseValue}
							setCourseValue={setCourseValue}
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
