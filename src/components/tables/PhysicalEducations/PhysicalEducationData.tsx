import { zodResolver } from '@hookform/resolvers/zod'
import { PencilLine, Trash2 } from 'lucide-react'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

import CustomButton from '@/components/ui/buttons/CustomButton.tsx'
import ErrorMessage from '@/components/ui/fields/ErrorMessage.tsx'
import CustomModalForm from '@/components/ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomInput from '@/components/ui/inputs/CustomInput.tsx'

import {
	IPhysicalEducation,
	TypePhysicalEducationForm
} from '@/types/physical-education.types.ts'

import useModal from '@/hooks/useModal.ts'

import styles from '@/app/styles/Cards.module.scss'
import { physicalEducationValidationSchema } from '@/lib/validation/validation.schema.ts'

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
	} = useForm<TypePhysicalEducationForm>({
		mode: 'onChange',
		resolver: zodResolver(physicalEducationValidationSchema)
	})

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
						<CustomButton
							className={styles.iconBtn}
							onClick={() => setEditId(id)}
						>
							<PencilLine />
						</CustomButton>

						<CustomButton
							className={styles.iconBtn}
							onClick={() => setDeleteId(id)}
						>
							<Trash2 />
						</CustomButton>
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
						onClose={() => {
							setEditId(null)
							reset()
						}}
						formTitle={'Изменение'}
					>
						<CustomInput
							label={'Название'}
							defaultValue={name}
							placeholder={'Введите название'}
							id={'name'}
							{...register('name')}
						/>
						<ErrorMessage error={errors.name} />
					</CustomModalForm>
				</div>
			))}
		</div>
	)
}

export default PhysicalEducationData
