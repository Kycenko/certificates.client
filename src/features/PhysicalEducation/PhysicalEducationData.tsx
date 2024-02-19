import { IPhysicalEducation, TypePhysicalEducationForm } from '@entities/PhysicalEducation/physical-education.types'
import { useModal } from '@shared/hooks'
import { CustomButton, CustomInput, CustomModalForm } from '@shared/ui'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

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
	const { register, handleSubmit } = useForm<TypePhysicalEducationForm>()

	return (
		<div>
			{data?.map(({ id, name }) => (
				<div key={id} className='mb-4 rounded bg-white p-4 shadow'>
					<h2 className='mb-2 text-xl font-bold'>{name}</h2>
					<div className='flex space-x-2'>
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

export default PhysicalEducationData
