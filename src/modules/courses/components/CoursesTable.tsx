import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

import TableHeads from '@/components/tablesHeads/TableHeads.tsx'

import styles from '@/app/styles/Tables.module.scss'
import {useGetCourses} from '@/modules/courses/api/course.queries.ts'
import CourseData from '@/modules/courses/components/CourseData.tsx'
import CoursesFilters from '@/modules/courses/components/CoursesFilters.tsx'
import {CourseHeads} from '@/modules/courses/components/course-heads.ts'
import useCourseActions from '@/modules/courses/hooks/useCourseActions.ts'
import {useGetDepartments} from '@/modules/departments/api/department.queries.ts'
import {PAGES_URL} from '@/shared/constants/enums.ts'
import useFilterStates from '@/shared/hooks/useFilterStates'
import CustomLoader from '@/shared/ui/loader/CustomLoader.tsx'

const CoursesTable = () => {
	const navigate = useNavigate()
	const { departmentValue, setDepartmentValue, sortOrder, setSortOrder } =
		useFilterStates()

	const { departments } = useGetDepartments()
	const { courses, isLoading, refetch } = useGetCourses(
		departmentValue,
		sortOrder
	)

	const { handleDelete, handleEdit } = useCourseActions(refetch)

	const handleInfo = (id: number | string) => {
		navigate(`${PAGES_URL.COURSES}/${id}`)
	}

	useEffect(() => {
		window.history.pushState(
			null,
			'',
			`?sort=${sortOrder}&department=${departmentValue}`
		)
	}, [sortOrder, departmentValue])

	return (
		<div className={styles.container}>
			<div className={styles.headerContainer}>
				<div className={styles.header}>
					<CoursesFilters
						departments={departments}
						filterValue={departmentValue}
						setFilterValue={setDepartmentValue}
						sortOrder={sortOrder}
						setSortOrder={setSortOrder}
					/>
				</div>
			</div>
			<div className={styles.tableContainer}>
				<table className={styles.table}>
					<thead className={styles.tHeads}>
						<TableHeads data={CourseHeads} />
					</thead>
					<tbody>
						{isLoading ? (
							<CustomLoader />
						) : (
							<CourseData
								data={courses}
								departments={departments}
								onDelete={handleDelete}
								onEdit={handleEdit}
								onInfo={handleInfo}
							/>
						)}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default CoursesTable
