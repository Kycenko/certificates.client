import { Layout } from '@app/layout'
import { useGetGroups } from '@entities/Group'
import { TypeUserForm, useGetUser, useUpdateUser } from '@entities/User'
import { useUserInitialData } from '@features/initialData'
import {
	CustomButton,
	CustomInput,
	CustomSelect,
	ErrorMessage,
	Heading
} from '@shared/ui'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import styles from '@shared/styles/UserDetails.module.scss'

const UserDetailsComponent = () => {
	const { id } = useParams()
	const { user, refetch } = useGetUser(id)
	const { groups } = useGetGroups()
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors }
	} = useForm<TypeUserForm>({ mode: 'onChange' })
	useUserInitialData(id, reset)
	const { mutateAsync, isPending } = useUpdateUser()
	const handleEdit: SubmitHandler<TypeUserForm> = async (
		data: TypeUserForm
	) => {
		const { password, groupId, ...rest } = data
		await mutateAsync({
			id: id,
			data: {
				...rest,
				password: password || undefined,
				groupId: Number(groupId) || undefined
			}
		})
		await refetch()
	}
	return (
		<Layout>
			<Heading title={'Описание пользователя'}>
				<span className={styles.title}>{user?.login}</span>
			</Heading>
			<div className={styles.FormContainer}>
				<form
					className={styles.form}
					onSubmit={handleSubmit(handleEdit)}
				>
					<div className={styles.main}>
						<div>
							{' '}
							<CustomInput
								label={'Логин'}
								id={'login'}
								placeholder={'Введите логин'}
								{...register('login', {
									required: 'Обязательное поле',
									minLength: { value: 5, message: 'Минимум 5 символов' },
									maxLength: { value: 30, message: 'Максимум 30 символов' }
								})}
							/>
							<ErrorMessage error={errors.login} />
						</div>
						<div>
							<CustomInput
								label={'Пароль'}
								id={'password'}
								placeholder={'Введите новый пароль'}
								type={'password'}
								{...register('password', {
									minLength: { value: 6, message: 'Минимум 6 символов' },
									maxLength: { value: 40, message: 'Максимум 40 символов' }
								})}
							/>
							<ErrorMessage error={errors.password} />
						</div>

						<CustomSelect
							id={'isAdmin'}
							label={'Администратор?'}
							{...register('isAdmin', {
								setValueAs: value => value === 'true'
							})}
						>
							<option value={'false'}>Нет</option>
							<option value={'true'}>Да</option>
						</CustomSelect>
						<CustomSelect
							id={'groupId'}
							label={'Группа'}
							{...register('groupId')}
						>
							{groups?.map(({ id, name }) => (
								<option
									key={id}
									value={id}
								>
									{name}
								</option>
							))}
						</CustomSelect>
					</div>
					<div className={styles.submitBtn}>
						<CustomButton
							type={'submit'}
							disabled={isPending}
						>
							Сохранить
						</CustomButton>
					</div>
				</form>
			</div>
		</Layout>
	)
}

export default UserDetailsComponent
