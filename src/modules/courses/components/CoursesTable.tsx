import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import TableHeads from '@/components/tablesHeads/TableHeads.tsx'

import CoursesFilters from './CoursesFilters'
import styles from '@/app/styles/Tables.module.scss'
import {
	useDeleteCourse,
	useGetCourses,
	useUpdateCourse
} from '@/modules/courses/api/course.queries.ts'
import CourseData from '@/modules/courses/components/CourseData.tsx'
import { CourseHeads } from '@/modules/courses/components/course-heads.ts'
import { TypeCourseForm } from '@/modules/courses/types/course.types.ts'
import { useGetDepartments } from '@/modules/departments/api/department.queries.ts'
import { PAGES_URL } from '@/shared/constants/enums.ts'
import useModal from '@/shared/hooks/useModal.ts'
import CustomLoader from '@/shared/ui/loader/CustomLoader.tsx'

const CoursesTable = () => {
	const [filterValue, setFilterValue] = useState<string>('')
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
	const navigate = useNavigate()

	const { courses, isLoading, refetch } = useGetCourses(filterValue, sortOrder)

	const { closeModal } = useModal()

	const { departments } = useGetDepartments()

	const { update } = useUpdateCourse()
	const { remove } = useDeleteCourse()

	const handleEdit = async (id: number | string, data: TypeCourseForm) => {
		await update({
			id,
			data: {
				...data,
				number: +data.number
			}
		})
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

	window.history.pushState(null, '', `?sort=${sortOrder}&filter=${filterValue}`)

	if (isLoading) return <CustomLoader />
	return (
		<div className={styles.container}>
			<div className={styles.headerContainer}>
				<div className={styles.header}>
					<CoursesFilters
						departments={departments}
						filterValue={filterValue}
						setFilterValue={setFilterValue}
						sortOrder={sortOrder}
						setSortOrder={setSortOrder}
					/>
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
	)
}

export default CoursesTable
