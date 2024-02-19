import { IDepartment, TypeDepartmentForm } from '@entities/Department/department.types'
import { selectSearchTerm } from '@features/Search/search.slice'
import { selectSortOrder } from '@features/SortOrder/sort.slice'
import { useAppSelector, useModal } from '@shared/hooks'
import { CustomButton, CustomInput, CustomModalForm, ErrorMessage } from '@shared/ui'
import { updateHistory } from '@shared/utils'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

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
				<td colSpan={2} className='px-6 py-4 text-center'>
					Данные не найдены
				</td>
			</tr>
		)
	}
	updateHistory(searchTerm, sortOrder)

	return (
		<>
			{filteredData?.map(({ id, name }) => (
				<tr key={id}>
					<td>
						<div>
							<span>{name}</span>
						</div>
					</td>
					<td className='flex justify-end px-6 py-4'>
						<div className='flex items-center space-x-2'>
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
			))}
		</>
	)
}

export default DepartmentData
