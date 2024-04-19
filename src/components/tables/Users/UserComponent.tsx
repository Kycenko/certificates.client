import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import UserData from '@/components/tables/Users/UserData.tsx'
import CustomButton from '@/components/ui/buttons/CustomButton.tsx'

import { IRegister } from '@/types/auth.types.ts'

import Layout from '../../Layout/Layout.tsx'
import ErrorMessage from '../../ui/fields/ErrorMessage.tsx'
import Heading from '../../ui/fields/Heading.tsx'
import CustomModalForm from '../../ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomInput from '../../ui/inputs/CustomInput.tsx'
import CustomLoader from '../../ui/loader/CustomLoader.tsx'

import { PAGES_URL } from '@/lib/constants/enums.ts'
import useModal from '@/lib/hooks/useModal.ts'
import { useRegister } from '@/queries/auth.queries.ts'
import { useDeleteUser, useGetUsers } from '@/queries/user.queries.ts'

const UserComponent = () => {
	const navigate = useNavigate()
	const { closeModal, isOpen, openModal } = useModal()
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm<IRegister>({ mode: 'onChange' })
	const { users, refetch, isLoading } = useGetUsers()

	const registerQuery = useRegister()
	const deleteQuery = useDeleteUser()

	const handleRegister = async (data: IRegister) => {
		await registerQuery.mutateAsync({ ...data })
		closeModal()
		reset()
		await refetch()
	}

	const handleDelete = async (id: string | number) => {
		await deleteQuery.mutateAsync(id)
		closeModal()

		await refetch()
	}

	const handleEdit = (id: number | string) => {
		navigate(`${PAGES_URL.USERS}/${id}`)
	}
	if (isLoading)
		return (
			<Layout>
				<CustomLoader />
			</Layout>
		)

	return (
		<Layout>
			<Heading title='Список пользователей' />

			<CustomButton
				variant='create'
				onClick={openModal}
			>
				Добавить пользователя
			</CustomButton>

			<UserData
				data={users}
				onDelete={handleDelete}
				onEdit={handleEdit}
			/>
			<CustomModalForm
				buttonTitle='Добавить'
				formTitle='Добавление'
				isOpen={isOpen}
				onClose={closeModal}
				onSubmit={handleSubmit(handleRegister)}
			>
				<CustomInput
					id={'login'}
					label={'Логин'}
					placeholder={'Введите логин'}
					{...register('login', {
						required: 'Обязательное поле',
						minLength: { value: 5, message: 'Минимум 5 символов' },
						maxLength: { value: 30, message: 'Максимум 30 символов' }
					})}
				/>
				<ErrorMessage error={errors.login} />

				<CustomInput
					id={'password'}
					label={'Пароль'}
					placeholder={'Введите пароль'}
					{...register('password', {
						required: 'Обязательное поле',
						minLength: { value: 6, message: 'Минимум 6 символов' },
						maxLength: { value: 40, message: 'Максимум 40 символов' }
					})}
				/>
				<ErrorMessage error={errors.password} />
				<CustomInput
					className='mt-4 flex items-center'
					type='checkbox'
					id={'isAdmin'}
					label={'Администратор?'}
					{...register('isAdmin')}
				/>
			</CustomModalForm>
		</Layout>
	)
}

export default UserComponent
