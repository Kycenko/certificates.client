import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import {
	IDepartment,
	TypeDepartmentForm
} from '@/modules/departments/types/department.types.ts'
import ActionButtons from '@/shared/components/ActionButtons'
import useModal from '@/shared/hooks/useModal.ts'
import styles from '@/shared/styles/Tables.module.scss'
import ErrorMessage from '@/shared/ui/fields/ErrorMessage.tsx'
import CustomModalForm from '@/shared/ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomInput from '@/shared/ui/inputs/CustomInput/CustomInput.tsx'
import { departmentValidationSchema } from '@/shared/validation/validation.schema.ts'

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
		reset,
		setFocus
	} = useForm<TypeDepartmentForm>({
		mode: 'onChange',
		resolver: zodResolver(departmentValidationSchema)
	})
	useEffect(() => {
		setFocus('name')
	})
	const handleDelete = (id: number | string) => {
		onDelete(id)
		setDeleteId(null)
	}
	const onSubmit = (id: number | string, data: TypeDepartmentForm) => {
		onEdit(id, data)
		setEditId(null)
		reset()
	}

	return (
		<>
			{data?.map(({ id, name }) => (
				<tr
					className={styles.contentCell}
					key={id}
				>
					<td className={styles.cellPadding}>
						<span>
							<span>{name}</span>
						</span>
					</td>
					<td className={styles.editCellContainer}>
						<span className={styles.adminEditCell}>
							<ActionButtons
								onEdit={() => setEditId(id)}
								onDelete={() => setDeleteId(id)}
								onInfo={() => onInfo(id)}
								actionId={id}
							/>
						</span>
					</td>
					<CustomModalForm
						onSubmit={handleSubmit(data => onSubmit(id, data))}
						isOpen={editId === id}
						onClose={() => {
							setEditId(null)
							reset()
						}}
						formTitle='Изменение'
						buttonTitle='Изменить'
					>
						<CustomInput
							id='name'
							label='Название'
							placeholder={'Введите название'}
							defaultValue={name}
							{...register('name')}
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
			))}
		</>
	)
}

export default DepartmentData
