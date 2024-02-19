import { Layout } from '@app/layout'
import {
	useCreatePhysicalEducation,
	useDeletePhysicalEducation,
	useGetPhysicalEducations,
	useUpdatePhysicalEducation
} from '@entities/PhysicalEducation/physical-education.queries.ts'
import { TypePhysicalEducationForm } from '@entities/PhysicalEducation/physical-education.types.ts'
import { PhysicalEducationData } from '@features/PhysicalEducation'
import { useModal } from '@shared/hooks'
import { CustomInput, CustomModalForm, ErrorMessage, Heading } from '@shared/ui'
import CreateButton from '@shared/ui/buttons/CreateButton.tsx'
import { SubmitHandler, useForm } from 'react-hook-form'
import Loader from '@shared/ui/loader/CustomLoader.tsx'

const PhysicalEducationComponent = () => {
	const { data, refetch, isLoading } = useGetPhysicalEducations()
	
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
		return <Layout><Loader /></Layout>
	
	return (
		<Layout>
			<Heading title="Список групп по физкультуре" />
			<CreateButton onClick={openModal}>
				Создать группу по физкультуре
			</CreateButton>
			<PhysicalEducationData
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

export default PhysicalEducationComponent
