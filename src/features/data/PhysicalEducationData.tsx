import {
	IPhysicalEducation,
	TypePhysicalEducationForm
} from '@entities/PhysicalEducation'
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

interface PhysicalEducationDataProps {
	data: IPhysicalEducation[] | undefined
	onEdit: (id: number | string, data: TypePhysicalEducationForm) => void
	onDelete: (id: number | string) => void
}

const PhysicalEducationData: FC<PhysicalEducationDataProps> = ({
	data,
	onDelete,
	onEdit
}) => {
	const { editId, setDeleteId, deleteId, setEditId } = useModal()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<TypePhysicalEducationForm>({ mode: 'onChange' })

	const onSubmit = (id: number | string, data: TypePhysicalEducationForm) => {
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
						onSubmit={() => onDelete(id)}
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

export default PhysicalEducationData
