import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Filter from '@/components/Filter/Filter.tsx'
import CourseData from '@/components/tables/Courses/CourseData.tsx'
import TableHeads from '@/components/tables/tablesHeads/TableHeads.tsx'

import { PAGES_URL } from '@/constants/enums.ts'
import { CourseHeads } from '@/constants/table-heads.ts'

import { TypeCourseForm } from '@/types/course.types.ts'

import useModal from '@/hooks/useModal.ts'

import SortOrder from '../../SortOrder/SortOrder.tsx'
import CustomLoader from '../../ui/loader/CustomLoader.tsx'

import styles from '@/app/styles/Tables.module.scss'
import {
	useDeleteCourse,
	useGetCourses,
	useUpdateCourse
} from '@/queries/course.queries.ts'
import { useGetDepartments } from '@/queries/department.queries.ts'

const CoursesTable = () => {
	const [filterValue, setFilterValue] = useState<string>('')

	const navigate = useNavigate()

	const { courses, isLoading, refetch } = useGetCourses(filterValue)
	const { departments } = useGetDepartments()
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
						<Filter
							label='Фильтрация по отделению:'
							filterValue={filterValue}
							setFilterValue={setFilterValue}
						>
							<option
								key={0}
								value={''}
							>
								Все отделения
							</option>
							{departments?.map(department => (
								<option
									key={department.id}
									value={department.name}
								>
									{department.name}
								</option>
							))}
						</Filter>
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
