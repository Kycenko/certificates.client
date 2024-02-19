import { Layout } from '@app/layout'
import { useDeleteUser, useGetUsers } from '@entities/User/user.queries.ts'

import { useRegister } from '@shared/auth/auth.queries.ts'
import { IRegister } from '@shared/auth/auth.types.ts'
import { CustomInput, CustomModalForm, CustomSelect, ErrorMessage, Heading } from '@shared/ui'

import { UserData } from '@features/User'
import { useModal } from '@shared/hooks'
import CreateButton from '@shared/ui/buttons/CreateButton.tsx'
import Loader from '@shared/ui/loader/CustomLoader.tsx'
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
	} = useForm<IRegister>()
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
		navigate(`/users/${id}`)
	}
	if (isLoading)
		return (
			<Layout>
				<Loader />
			</Layout>
		)
	
	return (
		<Layout>
			<Heading title="Список пользователей" />
			
			<CreateButton onClick={openModal}>Создать пользователя</CreateButton>
			
			<UserData data={users} onDelete={handleDelete} onEdit={handleEdit} />
			<CustomModalForm
				buttonTitle="Создать"
				formTitle="Создание"
				isOpen={isOpen}
				onClose={closeModal}
				onSubmit={handleSubmit(handleRegister)}
			>
				<CustomInput
					id={'login'}
					label={'Логин'}
					placeholder={'Введите логин'}
					{...register('login', { required: 'Обязательное поле' })}
				/>
				<ErrorMessage error={errors.login} />
				
				<CustomInput
					id={'password'}
					label={'Пароль'}
					placeholder={'Введите пароль'}
					{...register('password', { required: 'Обязательное поле' })}
				/>
				<ErrorMessage error={errors.password} />
				
				<CustomSelect
					id={'isAdmin'}
					label="Администратор?"
					{...register('isAdmin', {
						setValueAs: value => value === 'true'
					})}
				>
					<option value="false">Нет</option>
					<option value="true">Да</option>
				</CustomSelect>
			</CustomModalForm>
		</Layout>
	)
}

export default UserComponent
