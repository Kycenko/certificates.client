import { useNavigate } from 'react-router-dom'

import StudentData from '@/components/tables/tablesData/StudentData'
import TableHeads from '@/components/tables/tablesHeads/TableHeads'

import { PAGES_URL } from '@/constants/enums'
import { StudentHeads } from '@/constants/table-heads.ts'

import { TypeStudentForm } from '@/types/student.types'

import useModal from '@/hooks/useModal'

import Search from '../Search/Search'
import SortOrder from '../SortOrder/SortOrder'
import CustomLoader from '../ui/loader/CustomLoader'

import styles from '@/app/styles/Tables.module.scss'
import {
	useDeleteStudent,
	useGetStudents,
	useUpdateStudent
} from '@/queries/student.queries'


const StudentsTable = () => {
	const navigate = useNavigate()
	const { students, isLoading, refetch } = useGetStudents()

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
	const onHistory = (id: number | string) => {
		navigate(`${PAGES_URL.STUDENT_HISTORY}/${id}`)
	}

	if (isLoading) return <CustomLoader />
	return (
		<>
			<div className={styles.container}>
				<div className={styles.tableContainer}>
					<div className={styles.headerContainer}>
						<div className={styles.header}>
							<Search placeholder={'Поиск по имени обучающегося...'} />
							<SortOrder />
						</div>
					</div>
					<table className={styles.table}>
						<thead className={styles.tHeads}>
							<TableHeads data={StudentHeads} />
						</thead>
						<tbody>
							<StudentData
								data={students}
								onDelete={handleDelete}
								onEdit={handleEdit}
								onInfo={handleInfo}
								onHistory={onHistory}
							/>
						</tbody>
					</table>
				</div>
			</div>
		</>
	)
}

export default StudentsTable
