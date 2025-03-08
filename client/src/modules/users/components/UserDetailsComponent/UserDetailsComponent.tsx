import { SubmitHandler, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import styles from './UserDetailsComponent.module.scss'
import { useGetGroups } from '@/modules/groups/api/group.queries.ts'
import { useGetUser, useUpdateUser } from '@/modules/users/api/user.queries.ts'
import useUserInitialData from '@/modules/users/hooks/useUserInitialData.tsx'
import { TypeUserForm } from '@/modules/users/types/user.types.ts'
import CustomButton from '@/shared/ui/buttons/CustomButton.tsx'
import ErrorMessage from '@/shared/ui/fields/ErrorMessage.tsx'
import Heading from '@/shared/ui/fields/Heading/Heading.tsx'
import CustomCheckBox from '@/shared/ui/inputs/CustomCheckBox/CustomCheckBox.tsx'
import CustomInput from '@/shared/ui/inputs/CustomInput/CustomInput.tsx'
import CustomSelect from '@/shared/ui/selects/CustomSelect.tsx'

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

	const { mutateAsync } = useUpdateUser()
	const handleEdit: SubmitHandler<TypeUserForm> = async (
		data: TypeUserForm
	) => {
		try {
			const { password, groupId, ...rest } = data
			await mutateAsync({
				id: id,
				data: {
					...rest,
					password: password || undefined,
					groupId: Number(groupId) || null
				}
			})
			await refetch()
		} catch (error) {
			if (error?.response.status === 500) {
				alert('Пользователь с таким логином уже существует')
			}
		}
	}

	return (
		<>
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
						{user?.isAdmin === false ? (
							<>
								<CustomCheckBox
									className='mt-7'
									id={'isAdmin'}
									label={'Администратор?'}
									{...register('isAdmin')}
								/>

								<CustomSelect
									id={'groupId'}
									label={'Группа'}
									{...register('groupId')}
								>
									<option value={''}>Не выбрана</option>
									{groups?.map(({ id, name }) => (
										<option
											key={id}
											value={id}
										>
											{name}
										</option>
									))}
								</CustomSelect>
							</>
						) : null}
					</div>
					<div className={styles.submitBtn}>
						<CustomButton
							type={'submit'}
							variant='create'
							disabled={Object.keys(errors).length > 0}
						>
							Сохранить
						</CustomButton>
					</div>
				</form>
			</div>
		</>
	)
}

export default UserDetailsComponent
