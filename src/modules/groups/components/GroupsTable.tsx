import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import TableHeads from '@/components/tablesHeads/TableHeads.tsx'

import useGroupActions from '../hooks/useGroupsActions.ts'

import GroupsFilters from './GroupsFilters.tsx'
import { GroupHeads } from './group-heads.ts'
import styles from '@/app/styles/Tables.module.scss'
import { useGetDepartments } from '@/modules/departments/api/department.queries.ts'
import { useGetGroups } from '@/modules/groups/api/group.queries.ts'
import GroupData from '@/modules/groups/components/GroupData.tsx'
import { IGroup } from '@/modules/groups/types/group.types.ts'
import { PAGES_URL } from '@/shared/constants/enums.ts'
import useFilterStates from '@/shared/hooks/useFilterStates.ts'
import useSortAndFilterData from '@/shared/hooks/useSortAndFilterData.ts'
import CustomLoader from '@/shared/ui/loader/CustomLoader.tsx'

const GroupsTable = () => {
	const navigate = useNavigate()

	const {
		departmentValue,
		setDepartmentValue,
		courseValue,
		setCourseValue,
		sortOrder,
		setSortOrder
	} = useFilterStates()

	const { departments } = useGetDepartments()
	// const { courses } = useGetCourses()
	const { groups, isLoading, refetch } = useGetGroups(
		sortOrder,
		departmentValue,
		courseValue
	)

	const { handleDelete, handleEdit } = useGroupActions(refetch)

	const { sortedData, searchTerm, setSearchTerm } = useSortAndFilterData(
		groups as IGroup[],
		'name'
	)

	const handleInfo = (id: number | string) => {
		navigate(`${PAGES_URL.GROUPS}/${id}`)
	}

	useEffect(() => {
		window.history.pushState(
			null,
			'',
			`?sort=${sortOrder}&department=${departmentValue}&course=${courseValue}&search=${searchTerm}`
		)
	}, [sortOrder, departmentValue, courseValue, searchTerm])

	return (
		<div className={styles.container}>
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
			<div className={styles.tableContainer}>
				<table className={styles.table}>
					<thead className={styles.tHeads}>
						<TableHeads data={GroupHeads} />
					</thead>
					<tbody>
						{isLoading ? (
							<CustomLoader />
						) : (
							<GroupData
								data={sortedData}
								// courses={courses}
								onDelete={handleDelete}
								onEdit={handleEdit}
								onInfo={handleInfo}
							/>
						)}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default GroupsTable
