import {
	TypeStudentForm,
	useDeleteStudent,
	useGetStudents,
	useUpdateStudent
} from '@entities/Student'
import { Search } from '@features/Search'
import { SortOrder } from '@features/SortOrder'
import { StudentData } from '@features/data'
import { TableHeads } from '@features/heads'
import { PAGES_URL, StudentHeads } from '@shared/config'
import { useModal } from '@shared/hooks'
import { CustomLoader } from '@shared/ui'
import { useNavigate } from 'react-router-dom'

import styles from '@shared/styles/Tables.module.scss'

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

	if (isLoading) return <CustomLoader />
	return (
		<>
			<div className={styles.container}>
				<div className={styles.tableContainer}>
					<div className={styles.headerContainer}>
						<div className={styles.header}>
							<Search />
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
							/>
						</tbody>
					</table>
				</div>
			</div>
		</>
	)
}

export default StudentsTable
