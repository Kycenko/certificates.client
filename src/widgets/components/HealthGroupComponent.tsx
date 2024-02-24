import { Layout } from '@app/layout'
import {
	TypeHealthGroupForm,
	useCreateHealthGroup,
	useDeleteHealthGroup,
	useGetHealthGroups,
	useUpdateHealthGroup
} from '@entities/HealthGroup'
import { HealthGroupData } from '@features/data'
import { useModal } from '@shared/hooks'
import {
	CreateButton,
	CustomInput,
	CustomLoader,
	CustomModalForm,
	ErrorMessage,
	Heading
} from '@shared/ui'
import { SubmitHandler, useForm } from 'react-hook-form'

const HealthGroupComponent = () => {
	const { healthGroups, refetch, isLoading } = useGetHealthGroups()
	const { closeModal, isOpen, openModal } = useModal()
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<TypeHealthGroupForm>({ mode: 'onChange' })
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
	if (isLoading)
		return (
			<Layout>
				<CustomLoader />
			</Layout>
		)
	return (
		<Layout>
			<Heading title='Список групп здоровья' />
			<CreateButton onClick={openModal}>Создать группу здоровья</CreateButton>
			<HealthGroupData
				data={healthGroups}
				onDelete={handleDelete}
				onEdit={handleEdit}
			/>
			<CustomModalForm
				onSubmit={handleSubmit(handleCreate)}
				buttonTitle={'Создать'}
				isOpen={isOpen}
				onClose={closeModal}
				formTitle={'Создание'}
			>
				<CustomInput
					label={'Название'}
					id={'name'}
					placeholder={'Введите название'}
					{...register('name', {
						required: 'Обязательное поле',
						minLength: { value: 5, message: 'Минимум 5 символов' },
						maxLength: { value: 15, message: 'Максимум 15 символов' }
					})}
				/>
				<ErrorMessage error={errors.name} />
			</CustomModalForm>
		</Layout>
	)
}

export default HealthGroupComponent
