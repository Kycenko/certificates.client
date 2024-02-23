import { IHealthGroup, TypeHealthGroupForm } from '@entities/HealthGroup'
import { useModal } from '@shared/hooks'
import { CustomButton, CustomInput, CustomModalForm } from '@shared/ui'
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

	const { register, handleSubmit } = useForm<TypeHealthGroupForm>()

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
						onSubmit={handleSubmit(data => {
							onEdit(id, data)
							setEditId(null)
						})}
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
							{...register('name', { required: 'Обязательное поле' })}
						/>
					</CustomModalForm>
				</div>
			))}
		</div>
	)
}

export default HealthGroupData
