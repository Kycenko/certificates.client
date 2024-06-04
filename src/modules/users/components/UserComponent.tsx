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
import {zodResolver} from "@hookform/resolvers/zod";
import { userValidationSchema} from "@/shared/helpers/validation.schema.ts";
import styles from '@/app/styles/Cards.module.scss'
const UserComponent = () => {
	const navigate = useNavigate()
	const { closeModal, isOpen, openModal } = useModal()
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm<IRegister>({ mode: 'onChange', resolver: zodResolver(userValidationSchema) })
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
		<div className={styles.container}>
			<div className={styles.header}>
				<h1 className={styles.title}>
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
					{...register('login')}
				/>
				<ErrorMessage error={errors.login} />

				<CustomInput
					id={'password'}
					label={'Пароль'}
					placeholder={'Введите пароль'}
					{...register('password')}
				/>
				<ErrorMessage error={errors.password} />
				<CustomCheckBox
					id={'isAdmin'}
					label={'Администратор?'}
					{...register('isAdmin')}
				/>
			</CustomModalForm>
		</div>
	)
}

export default UserComponent
