import { FC } from 'react'
import { useForm } from 'react-hook-form'

import CustomButton from '@/components/ui/buttons/CustomButton'
import ErrorMessage from '@/components/ui/fields/ErrorMessage'
import CustomModalForm from '@/components/ui/forms/CustomModalForm/CustomModalForm'
import CustomInput from '@/components/ui/inputs/CustomInput'

import {
	IPhysicalEducation,
	TypePhysicalEducationForm
} from '@/types/physical-education.types'

import useModal from '@/hooks/useModal'

import styles from '@/app/styles/Cards.module.scss'

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
								minLength: { value: 3, message: 'Минимум 3 символа' },
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