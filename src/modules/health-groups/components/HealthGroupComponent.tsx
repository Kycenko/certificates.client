import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import useHealthGroupActions from '../hooks/useHealthGroupActions'

import { useGetHealthGroups } from '@/modules/health-groups/api/health-group.query.ts'
import HealthGroupData from '@/modules/health-groups/components/HealthGroupData.tsx'
import { TypeHealthGroupForm } from '@/modules/health-groups/types/health-group.types.ts'
import { healthGroupValidationSchema } from '@/shared/helpers/validation.schema.ts'
import useModal from '@/shared/hooks/useModal.ts'
import CustomButton from '@/shared/ui/buttons/CustomButton.tsx'
import ErrorMessage from '@/shared/ui/fields/ErrorMessage.tsx'
import CustomModalForm from '@/shared/ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomInput from '@/shared/ui/inputs/CustomInput/CustomInput.tsx'
import CustomLoader from '@/shared/ui/loader/CustomLoader.tsx'

const HealthGroupComponent = () => {
	const { healthGroups, refetch, isLoading } = useGetHealthGroups()
	const { closeModal, isOpen, openModal } = useModal()
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setFocus
	} = useForm<TypeHealthGroupForm>({
		mode: 'onChange',
		resolver: zodResolver(healthGroupValidationSchema)
	})
	useEffect(() => {
		if (isOpen) setFocus('name')
	}, [isOpen, setFocus])

	const { handleCreate, handleEdit, handleDelete } = useHealthGroupActions(
		refetch,
		reset,
		closeModal
	)

	return (
		<div className='w-full'>
			<div className='flex justify-between p-4'>
				<h1 className='text-xl md:text-2xl font-bold text-gray-800'>
					Список групп здоровья
				</h1>
				<CustomButton
					variant='create'
					onClick={openModal}
				>
					Добавить группу здоровья
				</CustomButton>
			</div>
			{isLoading ? (
				<CustomLoader />
			) : (
				<HealthGroupData
					data={healthGroups}
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
	)
}

export default HealthGroupComponent
