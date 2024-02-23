import { ICourse, TypeCourseForm } from '@entities/Course'
import { useGetDepartments } from '@entities/Department'
import { selectSortOrder } from '@features/SortOrder'
import { useAppSelector, useModal, useSortData } from '@shared/hooks'
import {
	CustomButton,
	CustomModalForm,
	CustomSelect,
	ErrorMessage
} from '@shared/ui'
import { updateHistory } from '@shared/utils'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

import styles from '@shared/styles/Tables.module.scss'

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

	const handleEdit = (id: number | string) => {
		setEditId(id)
		reset()
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
	const sortOrder = useAppSelector(selectSortOrder)

	const { sortedData } = useSortData(data as ICourse[], sortOrder)

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
								<CustomButton onClick={() => handleEdit(id)}>
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
							onSubmit={() => {
								onDelete(id)
								setDeleteId(null)
							}}
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
