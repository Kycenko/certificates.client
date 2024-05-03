import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import StudentsFilters from './StudentsFilters.tsx'
import { StudentHeads } from './student-heads.ts'
import { useGetGroups } from '@/modules/groups/queries/group.queries.ts'
import StudentData from '@/modules/students/components/StudentData.tsx'
import {
	useDeleteStudent,
	useGetStudents,
	useUpdateStudent
} from '@/modules/students/queries/student.queries.ts'
import {
	IStudent,
	TypeStudentForm
} from '@/modules/students/types/student.types.ts'
import TableHeads from '@/shared/components/tablesHeads/TableHeads.tsx'
import { PAGES_URL } from '@/shared/constants/enums.ts'
import useModal from '@/shared/hooks/useModal.ts'
import useSortAndFilterData from '@/shared/hooks/useSortAndFilterData.ts'
import styles from '@/shared/styles/Tables.module.scss'
import CustomLoader from '@/shared/ui/loader/CustomLoader.tsx'

const StudentsTable = () => {
	const navigate = useNavigate()

	const [filterValue, setFilterValue] = useState<string>('')

	const { students, isLoading, refetch } = useGetStudents(filterValue)

	const { sortedData, searchTerm, setSearchTerm, sortOrder, setSortOrder } =
		useSortAndFilterData(students as IStudent[], 'surname')
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
		`?search=${searchTerm}&group=${filterValue}&sort=${sortOrder}`
	)

	if (isLoading) return <CustomLoader />
	return (
		<>
			<div className={styles.container}>
				<div className={styles.tableContainer}>
					<div className={styles.headerContainer}>
						<div className={styles.header}>
							<StudentsFilters
								groups={groups}
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
