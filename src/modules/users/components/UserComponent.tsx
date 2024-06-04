import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useRegister } from '@/modules/auth/api/auth.queries.ts'
import { IRegister } from '@/modules/auth/types/auth.types.ts'
import { useDeleteUser, useGetUsers } from '@/modules/users/api/user.queries.ts'
import UserData from '@/modules/users/components/UserData.tsx'
import { PAGES_URL } from '@/shared/constants/enums.ts'
import useModal from '@/shared/hooks/useModal.ts'
import CustomButton from '@/shared/ui/buttons/CustomButton.tsx'
import ErrorMessage from '@/shared/ui/fields/ErrorMessage.tsx'
import CustomModalForm from '@/shared/ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomCheckBox from '@/shared/ui/inputs/CustomCheckBox/CustomCheckBox.tsx'
import CustomInput from '@/shared/ui/inputs/CustomInput/CustomInput.tsx'
import CustomLoader from '@/shared/ui/loader/CustomLoader.tsx'

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
		await refetch()
		reset()
	}

	const handleDelete = async (id: string | number) => {
		await deleteQuery.mutateAsync(id)
		await refetch()
	}

	const handleEdit = (id: number | string) => {
		navigate(`${PAGES_URL.USERS}/${id}`)
	}
	if (isLoading) return <CustomLoader />

	return (
		<div className='w-full'>
			<div className='flex justify-between p-4'>
				<h1 className='text-xl md:text-2xl font-bold text-gray-800'>
					Список пользователей
				</h1>
				<CustomButton
					variant='create'
					onClick={openModal}
				>
					Добавить пользователя
				</CustomButton>
			</div>
			<UserData
				data={users}
				onDelete={handleDelete}
				onEdit={handleEdit}
			/>
			<CustomModalForm
				buttonTitle='Добавить'
				formTitle='Добавление'
				isOpen={isOpen}
				disabled={Object.keys(errors).length > 0}
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
				<CustomCheckBox
					className='mt-2'
					id={'isAdmin'}
					label={'Администратор?'}
					{...register('isAdmin')}
				/>
			</CustomModalForm>
		</div>
	)
}

export default UserComponent
