import { zodResolver } from '@hookform/resolvers/zod'
import { memo, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import HealthGroupData from '@/components/tables/HealthGroups/HealthGroupData.tsx'
import CustomButton from '@/components/ui/buttons/CustomButton.tsx'

import { TypeHealthGroupForm } from '@/types/health-group.types.ts'

import ErrorMessage from '../../ui/fields/ErrorMessage.tsx'
import Heading from '../../ui/fields/Heading/Heading.tsx'
import CustomModalForm from '../../ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomInput from '../../ui/inputs/CustomInput/CustomInput.tsx'
import CustomLoader from '../../ui/loader/CustomLoader.tsx'

import useModal from '@/lib/hooks/useModal.ts'
import { healthGroupValidationSchema } from '@/lib/validation/validation.schema.ts'
import {
	useCreateHealthGroup,
	useDeleteHealthGroup,
	useGetHealthGroups,
	useUpdateHealthGroup
} from '@/queries/health-group.query.ts'

const HealthGroupComponent = memo(() => {
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
		setFocus('name')
	})
	const { create } = useCreateHealthGroup()
	const { update } = useUpdateHealthGroup()
	const { remove } = useDeleteHealthGroup()
	const handleCreate: SubmitHandler<TypeHealthGroupForm> = async data => {
		await create(data)
		closeModal()
		await refetch()
		reset()
	}

	const handleEdit = async (id: string | number, data: TypeHealthGroupForm) => {
		await update({ id, data })
		closeModal()
		await refetch()
	}

	const handleDelete = async (id: string | number) => {
		await remove(id)
		closeModal()
		await refetch()
	}
	if (isLoading) return <CustomLoader />
	return (
		<>
			<Heading title='Список групп здоровья' />
			<CustomButton
				variant='create'
				onClick={openModal}
			>
				Добавить группу здоровья
			</CustomButton>
			<HealthGroupData
				data={healthGroups}
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

export default HealthGroupComponent
