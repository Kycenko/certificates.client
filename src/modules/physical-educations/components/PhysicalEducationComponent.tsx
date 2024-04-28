import { zodResolver } from '@hookform/resolvers/zod'
import { memo, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import PhysicalEducationData from '@/modules/physical-educations/components/PhysicalEducationData.tsx'
import CustomButton from '@/shared/ui/buttons/CustomButton.tsx'

import { TypePhysicalEducationForm } from '@/modules/physical-educations/types/physical-education.types.ts'

import ErrorMessage from '@/shared/ui/fields/ErrorMessage.tsx'
import Heading from '@/shared/ui/fields/Heading/Heading.tsx'
import CustomModalForm from '@/shared/ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomInput from '@/shared/ui/inputs/CustomInput/CustomInput.tsx'
import CustomLoader from '@/shared/ui/loader/CustomLoader.tsx'

import useModal from '@/shared/hooks/useModal.ts'
import { physicalEducationValidationSchema } from '@/shared/validation/validation.schema.ts'
import {
	useCreatePhysicalEducation,
	useDeletePhysicalEducation,
	useGetPhysicalEducations,
	useUpdatePhysicalEducation
} from '@/modules/physical-educations/queries/physical-education.queries.ts'

const PhysicalEducationComponent = memo(() => {
	const { physicalEducations, refetch, isLoading } = useGetPhysicalEducations()

	const { closeModal, isOpen, openModal } = useModal()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setFocus
	} = useForm<TypePhysicalEducationForm>({
		mode: 'onChange',
		resolver: zodResolver(physicalEducationValidationSchema)
	})

	useEffect(() => {
		setFocus('name')
	})

	const { create } = useCreatePhysicalEducation()
	const { update } = useUpdatePhysicalEducation()
	const { remove } = useDeletePhysicalEducation()

	const handleCreate: SubmitHandler<TypePhysicalEducationForm> = async data => {
		await create(data)
		closeModal()
		await refetch()
		reset()
	}

	const handleEdit = async (
		id: number | string,
		data: TypePhysicalEducationForm
	) => {
		await update({ id, data })
		closeModal()
		await refetch()
	}

	const handleDelete = async (id: number | string) => {
		await remove(id)
		closeModal()
		await refetch()
	}

	if (isLoading) return <CustomLoader />

	return (
		<>
			<Heading title='Список групп по физкультуре' />
			<CustomButton
				variant='create'
				onClick={openModal}
			>
				Добавить группу по физкультуре
			</CustomButton>
			<PhysicalEducationData
				data={physicalEducations}
				onDelete={handleDelete}
				onEdit={handleEdit}
			/>
			<CustomModalForm
				onSubmit={handleSubmit(handleCreate)}
				buttonTitle={'Добавить'}
				isOpen={isOpen}
				onClose={closeModal}
				formTitle={'Добавление'}
			>
				<CustomInput
					label={'Название'}
					id={'name'}
					placeholder={'Введите название'}
					{...register('name')}
				/>
				<ErrorMessage error={errors.name} />
			</CustomModalForm>
		</>
	)
})

export default PhysicalEducationComponent
