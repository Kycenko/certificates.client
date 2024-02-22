import {
	IDepartment,
	TypeDepartmentForm
} from '@entities/Department/department.types'
import { selectSearchTerm } from '@features/Search/search.slice'
import { selectSortOrder } from '@features/SortOrder/sort.slice'
import { useAppSelector, useModal } from '@shared/hooks'
import useSortAndFilterData from '@shared/hooks/useSortAndFilterData'
import {
	CustomButton,
	CustomInput,
	CustomModalForm,
	ErrorMessage
} from '@shared/ui'
import { updateHistory } from '@shared/utils'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

import styles from '@shared/styles/Tables.module.scss'

interface DepartmentDataProps {
	data: IDepartment[] | undefined
	onEdit: (id: number | string, data: TypeDepartmentForm) => void
	onDelete: (id: number | string) => void
	onInfo: (id: number | string) => void
}
const DepartmentData: FC<DepartmentDataProps> = ({
	data,
	onDelete,
	onEdit,
	onInfo
}) => {
	const { setDeleteId, deleteId, editId, setEditId } = useModal()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<TypeDepartmentForm>()

	const searchTerm = useAppSelector(selectSearchTerm)
	const sortOrder = useAppSelector(selectSortOrder)
	const { sortedData } = useSortAndFilterData(
		data as IDepartment[],
		searchTerm,
		sortOrder
	)

	updateHistory(searchTerm, sortOrder)

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
				sortedData?.map(({ id, name }) => (
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
							<div className={styles.adminEditCell}>
								<CustomButton
									onClick={() => {
										setEditId(id)
										reset()
									}}
								>
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
							onSubmit={handleSubmit(data => {
								onEdit(id, data)
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
								placeholder={'Введите название'}
								defaultValue={name}
								{...register('name', { required: 'Обязательное поле' })}
							/>
							<ErrorMessage error={errors.name} />
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
				))
			)}
		</>
	)
}

export default DepartmentData
