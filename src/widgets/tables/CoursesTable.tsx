import {
	useDeleteCourse,
	useGetCourses,
	useUpdateCourse
} from '@entities/Course/course.queries.ts'
import { TypeCourseForm } from '@entities/Course/course.types.ts'
import SortOrder from '@features/SortOrder/SortOrder.tsx'
import TableHeads, { CourseHeads } from '@features/TableHeads.tsx'
import CourseData from '@features/data/CourseData'
import { useModal } from '@shared/hooks'
import Loader from '@shared/ui/loader/CustomLoader.tsx'
import { useNavigate } from 'react-router-dom'

import styles from '@shared/styles/Tables.module.scss'

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
		navigate(`/courses/${id}`)
	}

	if (isLoading) return <Loader />
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
