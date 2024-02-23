import { Layout } from '@app/layout'
import {
	TypePhysicalEducationForm,
	useCreatePhysicalEducation,
	useDeletePhysicalEducation,
	useGetPhysicalEducations,
	useUpdatePhysicalEducation
} from '@entities/PhysicalEducation'
import { PhysicalEducationData } from '@features/data'
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

const PhysicalEducationComponent = () => {
	const { physicalEducations, refetch, isLoading } = useGetPhysicalEducations()

	const { closeModal, isOpen, openModal } = useModal()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<TypePhysicalEducationForm>()

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

	if (isLoading)
		return (
			<Layout>
				<CustomLoader />
			</Layout>
		)

	return (
		<Layout>
			<Heading title='Список групп по физкультуре' />
			<CreateButton onClick={openModal}>
				Создать группу по физкультуре
			</CreateButton>
			<PhysicalEducationData
				data={physicalEducations}
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
					{...register('name', { required: 'Обязательное поле' })}
				/>
				<ErrorMessage error={errors.name} />
			</CustomModalForm>
		</Layout>
	)
}

export default PhysicalEducationComponent
