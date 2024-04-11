import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'

import PhysicalEducationData from '@/components/tables/tablesData/PhysicalEducationData'

import { TypePhysicalEducationForm } from '@/types/physical-education.types'

import useModal from '@/hooks/useModal'

import Layout from './Layout/Layout'
import CreateButton from './ui/buttons/CreateButton'
import ErrorMessage from './ui/fields/ErrorMessage'
import Heading from './ui/fields/Heading'
import CustomModalForm from './ui/forms/CustomModalForm/CustomModalForm'
import CustomInput from './ui/inputs/CustomInput'
import CustomLoader from './ui/loader/CustomLoader'
import { physicalEducationValidationSchema } from '@/lib/validation/validation.schema'
import {
	useCreatePhysicalEducation,
	useDeletePhysicalEducation,
	useGetPhysicalEducations,
	useUpdatePhysicalEducation
} from '@/queries/physical-education.queries'

const PhysicalEducationComponent = () => {
	const { physicalEducations, refetch, isLoading } = useGetPhysicalEducations()

	const { closeModal, isOpen, openModal } = useModal()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<TypePhysicalEducationForm>({
		mode: 'onChange',
		resolver: zodResolver(physicalEducationValidationSchema)
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
					{...register('name')}
				/>
				<ErrorMessage error={errors.name} />
			</CustomModalForm>
		</Layout>
	)
}

export default PhysicalEducationComponent
