import { useGetCourses } from '@entities/Course/course.queries'
import { IGroup, TypeGroupForm } from '@entities/Group/group.types'
import { selectSearchTerm } from '@features/Search/search.slice'
import { selectSortOrder } from '@features/SortOrder/sort.slice'
import { useAppSelector, useModal } from '@shared/hooks'
import {
	CustomButton,
	CustomInput,
	CustomModalForm,
	CustomSelect,
	ErrorMessage
} from '@shared/ui'
import { updateHistory } from '@shared/utils'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

import styles from '@shared/styles/Tables.module.scss'

interface GroupDataProps {
	data: IGroup[] | undefined
	onEdit: (id: number | string, data: TypeGroupForm) => void
	onDelete: (id: number | string) => void
	onInfo: (id: number | string) => void
}
const GroupData: FC<GroupDataProps> = ({ data, onDelete, onEdit, onInfo }) => {
	const { setDeleteId, deleteId, editId, setEditId } = useModal()
	const { courses } = useGetCourses()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<TypeGroupForm>()

	const searchTerm = useAppSelector(selectSearchTerm)
	const sortOrder = useAppSelector(selectSortOrder)

	const filteredData = data?.filter(item =>
		item.name.toLowerCase().includes(searchTerm.toLowerCase())
	)
	const sortedData = filteredData?.sort((a, b) => {
		return sortOrder === 'asc'
			? a.name.localeCompare(b.name)
			: b.name.localeCompare(a.name)
	})

	if (!sortedData || sortedData.length === 0) {
		return (
			<tr>
				<td
					colSpan={2}
					className={styles.noData}
				>
					Данные не найдены
				</td>
			</tr>
		)
	}
	updateHistory(searchTerm, sortOrder)

	return (
		<>
			{filteredData?.map(({ id, name, courseId }) => (
				<tr
					className={styles.contentCell}
					key={id}
				>
					<td>
						<div>
							<span>{name}</span>
						</div>
					</td>
					<td className={styles.editCellContainer}>
						<div className={styles.editCell}>
							<CustomButton
								onClick={() => {
									setEditId(id)
									reset()
								}}
							>
								Изменить
							</CustomButton>
							<CustomButton onClick={() => onInfo(id)}>Подробнее</CustomButton>
							<CustomButton onClick={() => setDeleteId(id)}>
								Удалить
							</CustomButton>
						</div>
					</td>
					<CustomModalForm
						onSubmit={handleSubmit(data => {
							const newData = { ...data, courseId: Number(data.courseId) }
							onEdit(id, newData)
							setEditId(null)
							reset()
						})}
						isOpen={editId === id}
						onClose={() => setEditId(null)}
						formTitle='Изменение'
						buttonTitle='Изменить'
					>
						<CustomInput
							id='name'
							label='Название'
							defaultValue={name}
							placeholder={'Введите название'}
							{...register('name', { required: 'Обязательное поле' })}
						/>
						<ErrorMessage error={errors.name} />
						<CustomSelect
							id='courseId'
							label='Выберите курс'
							defaultValue={courseId}
							{...register('courseId')}
						>
							{courses?.map(({ id, number }) => (
								<option
									key={id}
									value={id}
								>
									{number}-й курс
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
						{name}
					</CustomModalForm>
				</tr>
			))}
		</>
	)
}

export default GroupData
