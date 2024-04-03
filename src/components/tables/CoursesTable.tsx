import { useNavigate } from 'react-router-dom'

import { PAGES_URL } from '@/constants/enums'
import { CourseHeads } from '@/constants/heads'

import { TypeCourseForm } from '@/types/course.types'

import useModal from '@/hooks/useModal'

import SortOrder from '../SortOrder/SortOrder'
import TableHeads from '../heads/TableHeads'
import CourseData from '../tablesData/CourseData'
import CustomLoader from '../ui/loader/CustomLoader'

import styles from '@/app/styles/Tables.module.scss'
import {
	useDeleteCourse,
	useGetCourses,
	useUpdateCourse
} from '@/queries/course.queries'

const CoursesTable = () => {
	const navigate = useNavigate()
	const { courses, isLoading, refetch } = useGetCourses()

	const { closeModal } = useModal()

	const { update } = useUpdateCourse()
	const { remove } = useDeleteCourse()

	const handleEdit = async (id: number | string, data: TypeCourseForm) => {
		await update({ id, data: { ...data, number: +data.number } })
		closeModal()
		await refetch()
	}

	const handleDelete = async (id: number | string) => {
		await remove(id)
		closeModal()
		await refetch()
	}

	const handleInfo = (id: number | string) => {
		navigate(`${PAGES_URL.COURSES}/${id}`)
	}

	if (isLoading) return <CustomLoader />
	return (
		<div className={styles.container}>
			<div className={styles.tableContainer}>
				<div className={styles.headerContainer}>
					<div className={styles.header}>
						<SortOrder />
					</div>
				</div>
				<table className={styles.table}>
					<thead className={styles.tHeads}>
						<TableHeads data={CourseHeads} />
					</thead>
					<tbody>
						<CourseData
							data={courses}
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

export default CoursesTable
