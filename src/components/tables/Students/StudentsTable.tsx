import { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Filter from '@/components/filters/Filter/Filter.tsx'
import Search from '@/components/filters/Search/Search.tsx'
import SortOrder from '@/components/filters/SortOrder/SortOrder.tsx'
import StudentData from '@/components/tables/Students/StudentData.tsx'
import TableHeads from '@/components/tables/tablesHeads/TableHeads.tsx'

import { IStudent, TypeStudentForm } from '@/types/student.types.ts'

import CustomLoader from '../../ui/loader/CustomLoader.tsx'

import { StudentHeads } from './student-heads.ts'
import styles from '@/app/styles/Tables.module.scss'
import { PAGES_URL } from '@/lib/constants/enums.ts'
import useModal from '@/lib/hooks/useModal.ts'
import useSortAndFilterData from '@/lib/hooks/useSortAndFilterData.ts'
import { useGetGroups } from '@/queries/group.queries.ts'
import {
	useDeleteStudent,
	useGetStudents,
	useUpdateStudent
} from '@/queries/student.queries.ts'

const StudentsTable = () => {
	const navigate = useNavigate()
	const [searchTerm, setSearchTerm] = useState<string>('')
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
	const [filterValue, setFilterValue] = useState<string>('')

	const { students, isLoading, refetch } = useGetStudents(filterValue)

	const { sortedData } = useSortAndFilterData(
		students as IStudent[],
		searchTerm,
		sortOrder,
		'surname'
	)
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
							<Search
								searchTerm={searchTerm}
								setSearchTerm={setSearchTerm}
								placeholder={'Поиск по фамилии обучающегося...'}
							/>
							<SortOrder
								sortOrder={sortOrder}
								setSortOrder={setSortOrder}
							/>
							<Filter
								label='Фильтрация по названию группы'
								filterValue={filterValue}
								setFilterValue={setFilterValue}
							>
								<option value=''>Все группы</option>

								{groups?.map(({ id, name }) => (
									<option
										key={id}
										value={name}
									>
										{name}
									</option>
								))}
							</Filter>
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

export default memo(StudentsTable)
