import { useNavigate } from 'react-router-dom'

import Filter from '@/components/Filter/Filter.tsx'
import StudentData from '@/components/tables/Students/StudentData.tsx'
import TableHeads from '@/components/tables/tablesHeads/TableHeads.tsx'

import { PAGES_URL } from '@/constants/enums.ts'
import { StudentHeads } from '@/constants/table-heads.ts'

import { TypeStudentForm } from '@/types/student.types.ts'

import useFilters from '@/hooks/useFilters.ts'
import useModal from '@/hooks/useModal.ts'

import Search from '../../Search/Search.tsx'
import SortOrder from '../../SortOrder/SortOrder.tsx'
import CustomLoader from '../../ui/loader/CustomLoader.tsx'

import styles from '@/app/styles/Tables.module.scss'
import { useGetGroups } from '@/queries/group.queries.ts'
import {
	useDeleteStudent,
	useGetStudents,
	useUpdateStudent
} from '@/queries/student.queries.ts'

const StudentsTable = () => {
	const { searchTerm, setSearchTerm, filterValue, setFilterValue } =
		useFilters()
	const navigate = useNavigate()
	const { students, isLoading, refetch } = useGetStudents(filterValue)
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
							<SortOrder />
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
