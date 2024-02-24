import { Layout } from '@app/layout'
import { useDeleteUser, useGetUsers } from '@entities/User'
import { UserData } from '@features/data'
import { IRegister, useRegister } from '@shared/auth'
import { PAGES_URL } from '@shared/config'
import { useModal } from '@shared/hooks'
import {
	CreateButton,
	CustomInput,
	CustomLoader,
	CustomModalForm,
	CustomSelect,
	ErrorMessage,
	Heading
} from '@shared/ui'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

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

			<CreateButton onClick={openModal}>Создать пользователя</CreateButton>

			<UserData
				data={users}
				onDelete={handleDelete}
				onEdit={handleEdit}
			/>
			<CustomModalForm
				buttonTitle='Создать'
				formTitle='Создание'
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

				<CustomSelect
					id={'isAdmin'}
					label='Администратор?'
					{...register('isAdmin', {
						setValueAs: value => value === 'true'
					})}
				>
					<option value='false'>Нет</option>
					<option value='true'>Да</option>
				</CustomSelect>
			</CustomModalForm>
		</Layout>
	)
}

export default UserComponent
