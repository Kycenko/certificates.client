import { Info, Pencil, Trash2 } from 'lucide-react'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

import CustomButton from '@/components/ui/buttons/CustomButton.tsx'
import ErrorMessage from '@/components/ui/fields/ErrorMessage.tsx'
import CustomModalForm from '@/components/ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomSelect from '@/components/ui/selects/CustomSelect.tsx'

import { ICourse, TypeCourseForm } from '@/types/course.types.ts'

import useFilters from '@/hooks/useFilters.ts'
import useModal from '@/hooks/useModal.ts'
import useSortData from '@/hooks/useSortData'

import styles from '@/app/styles/Tables.module.scss'
import updateHistory from '@/lib/utils/updateHistory.ts'
import { useGetDepartments } from '@/queries/department.queries.ts'

interface CourseDataProps {
	data: ICourse[] | undefined
	onEdit: (id: number | string, data: TypeCourseForm) => void
	onDelete: (id: number | string) => void
	onInfo: (id: number | string) => void
}

const CourseData: FC<CourseDataProps> = ({
	data,
	onDelete,
	onEdit,
	onInfo
}) => {
	const { setDeleteId, deleteId, editId, setEditId } = useModal()
	const { departments } = useGetDepartments()
	const {
		register,
		handleSubmit,
		formState: { errors },

		reset
	} = useForm<TypeCourseForm>()

	const handleDelete = (id: number | string) => {
		onDelete(id)
		setDeleteId(null)
	}

	const onSubmit = (id: number | string, data: TypeCourseForm) => {
		const newData = {
			...data,
			departmentId: Number(data.departmentId)
		}
		onEdit(id, newData)
		setEditId(null)
		reset()
	}

	const { sortOrder } = useFilters()

	const { sortedData } = useSortData(
		data as ICourse[],

		sortOrder
	)

	updateHistory(null, sortOrder)

	return (
		<>
			{!sortedData || sortedData.length === 0 ? (
				<tr>
					<td
						colSpan={2}
						className={styles.noData}
					>
						Данные не найдены
					</td>
				</tr>
			) : (
				sortedData.map(({ id, number, departmentId, groups }) => (
					<tr
						className={styles.contentCell}
						key={id}
					>
						<td className={styles.cellPadding}>
							<span>{number}-й курс</span>
						</td>
						<td className={styles.cellPadding}>
							<span>
								{departments
									?.filter(({ id }) => id === departmentId)
									?.map(({ name }) => name)}
							</span>
						</td>
						<td className={styles.cellPadding}>{groups?.length}</td>

						<td className={styles.editCellContainer}>
							<div className={styles.adminEditCell}>
								<CustomButton onClick={() => setEditId(id)}>
									<Pencil />
								</CustomButton>
								<CustomButton onClick={() => onInfo(id)}>
									<Info />
								</CustomButton>
								<CustomButton onClick={() => setDeleteId(id)}>
									<Trash2 />
								</CustomButton>
							</div>
						</td>
						<CustomModalForm
							onSubmit={handleSubmit(data => onSubmit(id, data))}
							isOpen={editId === id}
							onClose={() => setEditId(null)}
							formTitle='Изменение'
							buttonTitle='Изменить'
						>
							<CustomSelect
								id='number'
								label='Выберите номер курса'
								defaultValue={number}
								{...register('number')}
							>
								<option
									key={1}
									value={1}
								>
									1 курс
								</option>
								<option
									key={2}
									value={2}
								>
									2 курс
								</option>
								<option
									key={3}
									value={3}
								>
									3 курс
								</option>
								<option
									key={4}
									value={4}
								>
									4 курс
								</option>
							</CustomSelect>

							<ErrorMessage error={errors.number} />
							<CustomSelect
								id='departmentId'
								label='Выберите отделение'
								defaultValue={departmentId}
								{...register('departmentId')}
							>
								{departments?.map(({ id, name }) => (
									<option
										key={id}
										value={id}
									>
										{name}
									</option>
								))}
							</CustomSelect>
						</CustomModalForm>
						<CustomModalForm
							onSubmit={() => handleDelete(id)}
							buttonTitle={'Удалить'}
							isOpen={deleteId === id}
							onClose={() => setDeleteId(null)}
							formTitle={'Удаление'}
						>
							{number}
						</CustomModalForm>
					</tr>
				))
			)}
		</>
	)
}

export default CourseData
