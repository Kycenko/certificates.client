import { Layout } from '@app/layout'
import {
	useCreateHealthGroup,
	useDeleteHealthGroup,
	useGetHealthGroups,
	useUpdateHealthGroup
} from '@entities/HealthGroup/health-group.query.ts'
import { TypeHealthGroupForm } from '@entities/HealthGroup/health-group.types.ts'
import { HealthGroupData } from '@features/HealthGroup'
import { useModal } from '@shared/hooks'
import { CustomInput, CustomModalForm, ErrorMessage, Heading } from '@shared/ui'
import CreateButton from '@shared/ui/buttons/CreateButton.tsx'
import { SubmitHandler, useForm } from 'react-hook-form'
import Loader from '@shared/ui/loader/CustomLoader.tsx'

const HealthGroupComponent = () => {
	const { data, refetch, isLoading } = useGetHealthGroups()
	const { closeModal, isOpen, openModal } = useModal()
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<TypeHealthGroupForm>()
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
		return <Layout><Loader /></Layout>
	return (
		<Layout>
			<Heading title="Список групп здоровья" />
			<CreateButton onClick={openModal}>Создать группу здоровья</CreateButton>
			<HealthGroupData
				data={data}
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

export default HealthGroupComponent
