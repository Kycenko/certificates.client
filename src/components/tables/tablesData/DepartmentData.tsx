import { FC } from 'react'
import { useForm } from 'react-hook-form'

import CustomButton from '@/components/ui/buttons/CustomButton.tsx'
import ErrorMessage from '@/components/ui/fields/ErrorMessage.tsx'
import CustomModalForm from '@/components/ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomInput from '@/components/ui/inputs/CustomInput.tsx'

import { IDepartment, TypeDepartmentForm } from '@/types/department.types.ts'

import useFilters from '@/hooks/useFilters.ts'
import useModal from '@/hooks/useModal.ts'
import useSortAndFilterData from '@/hooks/useSortAndFilterData.ts'

import updateHistory from '@/utils/updateHistory.ts'

import styles from '@/app/styles/Tables.module.scss'

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
	} = useForm<TypeDepartmentForm>({ mode: 'onChange' })

	const handleDelete = (id: number | string) => {
		onDelete(id)
		setDeleteId(null)
	}
	const onSubmit = (id: number | string, data: TypeDepartmentForm) => {
		onEdit(id, data)
		setEditId(null)
		reset()
	}

	const { searchTerm, sortOrder } = useFilters()

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
							<CustomInput
								id='name'
								label='Название'
								placeholder={'Введите название'}
								defaultValue={name}
								{...register('name', {
									required: 'Обязательное поле',
									minLength: { value: 4, message: 'Минимум 4 символа' },
									maxLength: { value: 15, message: 'Максимум 60 символов' }
								})}
							/>
							<ErrorMessage error={errors.name} />
						</CustomModalForm>
						<CustomModalForm
							onSubmit={() => handleDelete(id)}
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
