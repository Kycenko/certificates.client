import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Pagination from '@/components/Pagination/Pagination.tsx'
import TableHeads from '@/components/tablesHeads/TableHeads.tsx'

import useStudentActions from '../hooks/useStudentActions.ts'

import StudentsFilters from './StudentsFilters.tsx'
import { StudentHeads } from './student-heads.ts'
import styles from '@/app/styles/Tables.module.scss'
import { useGetDepartments } from '@/modules/departments/api/department.queries.ts'
import { useGetGroups } from '@/modules/groups/api/group.queries.ts'
import { useGetStudents } from '@/modules/students/api/student.queries.ts'
import StudentData from '@/modules/students/components/StudentData.tsx'
import { IStudent } from '@/modules/students/types/student.types.ts'
import { PAGES_URL } from '@/shared/constants/enums.ts'
import useFilterStates from '@/shared/hooks/useFilterStates.ts'
import useSortAndFilterData from '@/shared/hooks/useSortAndFilterData.ts'
import CustomLoader from '@/shared/ui/loader/CustomLoader.tsx'

const StudentsTable = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const navigate = useNavigate()
	const {
		courseValue,
		setCourseValue,
		groupValue,
		setGroupValue,
		departmentValue,
		setDepartmentValue,
		isExpelledValue,
		setIsExpelledValue
	} = useFilterStates()

	const { students, isLoading, refetch, totalPages, totalRecords } =
		useGetStudents(
			currentPage,
			10,
			departmentValue,
			courseValue,
			groupValue,
			isExpelledValue
		)

	const { sortedData, searchTerm, setSearchTerm, sortOrder, setSortOrder } =
		useSortAndFilterData(students as IStudent[], 'surname')
	const { departments } = useGetDepartments()
	const { groups } = useGetGroups()

	const { handleDelete, handleEdit } = useStudentActions(refetch)

	const handleInfo = (id: number | string) => {
		navigate(`${PAGES_URL.STUDENTS}/${id}`)
	}

	const handleHistory = (studentId: number | string) => {
		navigate(`${PAGES_URL.STUDENT_HISTORY}/${studentId}`)
	}

	useEffect(() => {
		window.history.pushState(
			null,
			'',
			`?page=${currentPage}&search=${searchTerm}&sort=${sortOrder}&department=${departmentValue}&course=${courseValue}&group=${groupValue}&isExpelled=${isExpelledValue}`
		)
	}, [
		sortOrder,
		searchTerm,
		departmentValue,
		courseValue,
		groupValue,
		isExpelledValue,
		currentPage
	])

	const onChangePage = (page: number) => {
		setCurrentPage(page)
	}
	return (
		<>
			<div className={styles.container}>
				<div className={styles.headerContainer}>
					<div className={styles.header}>
						<StudentsFilters
							departments={departments}
							groups={groups}
							searchTerm={searchTerm}
							setSearchTerm={setSearchTerm}
							sortOrder={sortOrder}
							setSortOrder={setSortOrder}
							departmentValue={departmentValue}
							setDepartmentValue={setDepartmentValue}
							courseValue={courseValue}
							setCourseValue={setCourseValue}
							groupValue={groupValue}
							setGroupValue={setGroupValue}
							isExpelledValue={isExpelledValue}
							setIsExpelledValue={setIsExpelledValue}
						/>
					</div>
				</div>
				<div className={styles.tableContainer}>
					<table className={styles.table}>
						<thead className={styles.tHeads}>
							<TableHeads data={StudentHeads} />
						</thead>
						<tbody>
							{isLoading ? (
								<CustomLoader />
							) : (
								<StudentData
									data={sortedData}
									groups={groups}
									onDelete={handleDelete}
									onEdit={handleEdit}
									onInfo={handleInfo}
									onHistory={handleHistory}
								/>
							)}
						</tbody>
					</table>

					<Pagination
						currentPage={currentPage}
						onChangePage={onChangePage}
						totalPages={totalPages}
						totalElements={totalRecords}
					/>
				</div>
			</div>
		</>
	)
}

export default StudentsTable
