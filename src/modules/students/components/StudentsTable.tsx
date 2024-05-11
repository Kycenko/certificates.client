import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import TableHeads from '@/components/tablesHeads/TableHeads.tsx'

import StudentsFilters from './StudentsFilters.tsx'
import { StudentHeads } from './student-heads.ts'
import styles from '@/app/styles/Tables.module.scss'
import { useGetDepartments } from '@/modules/departments/api/department.queries.ts'
import { useGetGroups } from '@/modules/groups/api/group.queries.ts'
import {
	useDeleteStudent,
	useGetStudents,
	useUpdateStudent
} from '@/modules/students/api/student.queries.ts'
import StudentData from '@/modules/students/components/StudentData.tsx'
import {
	IStudent,
	TypeStudentForm
} from '@/modules/students/types/student.types.ts'
import { PAGES_URL } from '@/shared/constants/enums.ts'
import useModal from '@/shared/hooks/useModal.ts'
import useSortAndFilterData from '@/shared/hooks/useSortAndFilterData.ts'
import CustomLoader from '@/shared/ui/loader/CustomLoader.tsx'

const StudentsTable = () => {
	const navigate = useNavigate()
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
	const [departmentValue, setDepartmentValue] = useState('')
	const [courseValue, setCourseValue] = useState('')
	const [groupValue, setGroupValue] = useState('')
	// const [isExpelled, setIsExpelled] = useState('')

	const { students, isLoading, refetch } = useGetStudents(
		sortOrder,
		departmentValue,
		courseValue,
		groupValue
	)

	const { sortedData, searchTerm, setSearchTerm } = useSortAndFilterData(
		students as IStudent[],
		'surname'
	)
	const { departments } = useGetDepartments()
	const { groups } = useGetGroups()
	const { closeModal } = useModal()
	const { update } = useUpdateStudent()
	const { remove } = useDeleteStudent()

	const handleEdit = async (id: number | string, data: TypeStudentForm) => {
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
		navigate(`${PAGES_URL.STUDENTS}/${id}`)
	}

	const handleHistory = (studentId: number | string) => {
		navigate(`${PAGES_URL.STUDENT_HISTORY}/${studentId}`)
	}

	window.history.pushState(
		null,
		'',
		`?search=${searchTerm}&group=${groupValue}&sort=${sortOrder}`
	)

	if (isLoading) return <CustomLoader />
	return (
		<>
			<div className={styles.container}>
				<div className={styles.tableContainer}>
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
							/>
						</div>
					</div>
					<table className={styles.table}>
						<thead className={styles.tHeads}>
							<TableHeads data={StudentHeads} />
						</thead>
						<tbody>
							<StudentData
								data={sortedData}
								onDelete={handleDelete}
								onEdit={handleEdit}
								onInfo={handleInfo}
								onHistory={handleHistory}
							/>
						</tbody>
					</table>
				</div>
			</div>
		</>
	)
}

export default StudentsTable
