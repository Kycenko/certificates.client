import { SubmitHandler, useForm } from 'react-hook-form'

import { TypeHealthGroupForm } from '@/types/health-group.types'

import useModal from '@/hooks/useModal'

import Layout from './Layout/Layout'
import HealthGroupData from '@/components/tables/tablesData/HealthGroupData'
import CreateButton from './ui/buttons/CreateButton'
import ErrorMessage from './ui/fields/ErrorMessage'
import Heading from './ui/fields/Heading'
import CustomModalForm from './ui/forms/CustomModalForm/CustomModalForm'
import CustomInput from './ui/inputs/CustomInput'
import CustomLoader from './ui/loader/CustomLoader'
import {
	useCreateHealthGroup,
	useDeleteHealthGroup,
	useGetHealthGroups,
	useUpdateHealthGroup
} from '@/queries/health-group.query'

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
