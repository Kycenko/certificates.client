import { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Filter from '@/components/filters/Filter/Filter.tsx'
import SortOrder from '@/components/filters/SortOrder/SortOrder.tsx'
import CourseData from '@/components/tables/Courses/CourseData.tsx'
import TableHeads from '@/components/tables/tablesHeads/TableHeads.tsx'

import { TypeCourseForm } from '@/types/course.types.ts'

import CustomLoader from '../../ui/loader/CustomLoader.tsx'

import { CourseHeads } from './course-heads.ts'
import styles from '@/app/styles/Tables.module.scss'
import { PAGES_URL } from '@/lib/constants/enums.ts'
import useModal from '@/lib/hooks/useModal.ts'
import {
	useDeleteCourse,
	useGetCourses,
	useUpdateCourse
} from '@/queries/course.queries.ts'

const CoursesTable = memo(() => {
	const [filterValue, setFilterValue] = useState<string>('')
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
	const navigate = useNavigate()

	const { courses, isLoading, refetch } = useGetCourses(filterValue, sortOrder)
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

	window.history.pushState(null, '', `?sort=${sortOrder}&filter=${filterValue}`)

	if (isLoading) return <CustomLoader />
	return (
		<div className={styles.container}>
			<div className={styles.tableContainer}>
				<div className={styles.headerContainer}>
					<div className={styles.header}>
						<SortOrder
							sortOrder={sortOrder}
							setSortOrder={setSortOrder}
						/>
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
							{courses?.map(({ department }) => (
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
})

export default CoursesTable
