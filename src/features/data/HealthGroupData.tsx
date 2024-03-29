import { IHealthGroup, TypeHealthGroupForm } from '@entities/HealthGroup'
import { useModal } from '@shared/hooks'
import {
	CustomButton,
	CustomInput,
	CustomModalForm,
	ErrorMessage
} from '@shared/ui'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

import styles from '@shared/styles/Cards.module.scss'

interface HealthGroupProps {
	data: IHealthGroup[] | undefined
	onDelete: (id: string | number) => void
	onEdit: (id: string | number, data: TypeHealthGroupForm) => void
}

const HealthGroupData: FC<HealthGroupProps> = ({ data, onDelete, onEdit }) => {
	const { editId, setEditId, deleteId, setDeleteId } = useModal()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<TypeHealthGroupForm>({ mode: 'onChange' })

	const handleDelete = (id: number | string) => {
		onDelete(id)
		setDeleteId(null)
	}

	const onSubmit = (id: number | string, data: TypeHealthGroupForm) => {
		onEdit(id, data)
		setEditId(null)
		reset()
	}

	return (
		<div>
			{data?.map(({ id, name }) => (
				<div
					key={id}
					className={styles.container}
				>
					<h2 className={styles.title}>{name}</h2>
					<div className={styles.buttons}>
						<CustomButton onClick={() => setEditId(id)}>Изменить</CustomButton>
						<CustomButton onClick={() => setDeleteId(id)}>Удалить</CustomButton>
					</div>
					<CustomModalForm
						onSubmit={() => handleDelete(id)}
						buttonTitle={'Удалить'}
						isOpen={deleteId === id}
						onClose={() => setDeleteId(null)}
						formTitle={'Удаление'}
					>
						{name}
					</CustomModalForm>
					<CustomModalForm
						onSubmit={handleSubmit(data => onSubmit(id, data))}
						buttonTitle={'Изменить'}
						isOpen={editId === id}
						onClose={() => setEditId(null)}
						formTitle={'Изменение'}
					>
						<CustomInput
							label={'Название'}
							defaultValue={name}
							placeholder={'Введите название'}
							id={'name'}
							{...register('name', {
								required: 'Обязательное поле',
								minLength: { value: 5, message: 'Минимум 5 символов' },
								maxLength: { value: 15, message: 'Максимум 15 символов' }
							})}
						/>
						<ErrorMessage error={errors.name} />
					</CustomModalForm>
				</div>
			))}
		</div>
	)
}

export default HealthGroupData
