import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import ActionButtons from '@/components/ActionButtons.tsx'
import NoData from '@/components/NoData.tsx'

import styles from '@/app/styles/Cards.module.scss'
import {
	IPhysicalEducation,
	TypePhysicalEducationForm
} from '@/modules/physical-educations/types/physical-education.types.ts'
import { physicalEducationValidationSchema } from '@/shared/helpers/validation.schema.ts'
import useModal from '@/shared/hooks/useModal.ts'
import ErrorMessage from '@/shared/ui/fields/ErrorMessage.tsx'
import CustomModalForm from '@/shared/ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomInput from '@/shared/ui/inputs/CustomInput/CustomInput.tsx'

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
		formState: { errors },
		setFocus
	} = useForm<TypePhysicalEducationForm>({
		mode: 'onChange',
		resolver: zodResolver(physicalEducationValidationSchema)
	})

	useEffect(() => {
		if (editId !== null) setFocus('name')
	}, [editId, setFocus])

	const onSubmit = (id: number | string, data: TypePhysicalEducationForm) => {
		onEdit(id, data)
		setEditId(null)
		reset()
	}
	if (!data || data.length === 0) return <NoData />
	return (
		<div>
			{data?.map(({ id, name }) => (
				<div
					key={id}
					className={styles.container}
				>
					<h2 className={styles.title}>{name}</h2>
					<div className={styles.buttons}>
						<ActionButtons
							actionId={id}
							onEdit={() => setEditId(id)}
							onDelete={() => setDeleteId(id)}
						/>
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
						disabled={Object.keys(errors).length > 0}
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
