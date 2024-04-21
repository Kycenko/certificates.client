import { zodResolver } from '@hookform/resolvers/zod'
import { PencilLine, Trash2 } from 'lucide-react'
import { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import CustomButton from '@/components/ui/buttons/CustomButton.tsx'
import ErrorMessage from '@/components/ui/fields/ErrorMessage.tsx'
import CustomModalForm from '@/components/ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomInput from '@/components/ui/inputs/CustomInput/CustomInput'

import {
	IHealthGroup,
	TypeHealthGroupForm
} from '@/types/health-group.types.ts'

import styles from '@/app/styles/Cards.module.scss'
import useModal from '@/lib/hooks/useModal.ts'
import { healthGroupValidationSchema } from '@/lib/validation/validation.schema.ts'

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
		formState: { errors },
		setFocus
	} = useForm<TypeHealthGroupForm>({
		mode: 'onChange',
		resolver: zodResolver(healthGroupValidationSchema)
	})

	useEffect(() => {
		setFocus('name')
	})

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

export default HealthGroupData
