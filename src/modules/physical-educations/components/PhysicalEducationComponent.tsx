import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import usePhysicalEducationActions from '../hooks/usePhysicalEducationActions'

import { useGetPhysicalEducations } from '@/modules/physical-educations/api/physical-education.queries.ts'
import PhysicalEducationData from '@/modules/physical-educations/components/PhysicalEducationData.tsx'
import { TypePhysicalEducationForm } from '@/modules/physical-educations/types/physical-education.types.ts'
import { physicalEducationValidationSchema } from '@/shared/helpers/validation.schema.ts'
import useModal from '@/shared/hooks/useModal.ts'
import CustomButton from '@/shared/ui/buttons/CustomButton.tsx'
import ErrorMessage from '@/shared/ui/fields/ErrorMessage.tsx'
import CustomModalForm from '@/shared/ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomInput from '@/shared/ui/inputs/CustomInput/CustomInput.tsx'
import CustomLoader from '@/shared/ui/loader/CustomLoader.tsx'

const PhysicalEducationComponent = () => {
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
		if (isOpen) setFocus('name')
	}, [isOpen, setFocus])

	const { handleCreate, handleEdit, handleDelete } =
		usePhysicalEducationActions(refetch, reset, closeModal)

	return (
		<>
			<div className=''>
				<div className='flex justify-between p-4'>
					<h1 className='text-xl md:text-2xl font-bold text-gray-800'>
						Список групп по физкультуре
					</h1>
					<CustomButton
						variant='create'
						onClick={openModal}
					>
						Добавить группу по физкультуре
					</CustomButton>
				</div>
				{isLoading ? (
					<CustomLoader />
				) : (
					<PhysicalEducationData
						data={physicalEducations}
						onDelete={handleDelete}
						onEdit={handleEdit}
					/>
				)}

				<CustomModalForm
					onSubmit={handleSubmit(handleCreate)}
					buttonTitle={'Добавить'}
					isOpen={isOpen}
					disabled={Object.keys(errors).length > 0}
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
			</div>
		</>
	)
}

export default PhysicalEducationComponent
