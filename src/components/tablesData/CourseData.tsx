import { FC } from 'react'
import { useForm } from 'react-hook-form'

import CustomButton from '@/components/ui/buttons/CustomButton'
import ErrorMessage from '@/components/ui/fields/ErrorMessage'
import CustomModalForm from '@/components/ui/forms/CustomModalForm/CustomModalForm'
import CustomSelect from '@/components/ui/selects/CustomSelect'

import { ICourse, TypeCourseForm } from '@/types/course.types'

import useFilters from '@/hooks/useFilters'
import useModal from '@/hooks/useModal'
import useSortData from '@/hooks/useSortData'

import updateHistory from '@/utils/updateHistory'

import styles from '@/app/styles/Tables.module.scss'
import { useGetDepartments } from '@/queries/department.queries'

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

	const { sortedData } = useSortData(data as ICourse[], sortOrder)

	updateHistory(null, 'asc')
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
				sortedData.map(({ id, number, departmentId }) => (
					<tr
						className={styles.contentCell}
						key={id}
					>
						<td>
							<span>{number}-й курс</span>
						</td>
						<td>
							<span>
								{departments
									?.filter(({ id }) => id === departmentId)
									?.map(({ name }) => name)}
							</span>
						</td>
						<td className={styles.editCellContainer}>
							<div className={styles.adminEditCell}>
								<CustomButton onClick={() => setEditId(id)}>
									Изменить
								</CustomButton>
								<CustomButton onClick={() => onInfo(id)}>
									Подробнее
								</CustomButton>
								<CustomButton onClick={() => setDeleteId(id)}>
									Удалить
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
								{...register('number', { required: 'Обязательное поле' })}
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
