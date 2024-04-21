import { SubmitHandler, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import CustomCheckBox from '@/components/ui/inputs/CustomCheckBox/CustomCheckBox.tsx'

import { TypeUserForm } from '@/types/user.types.ts'

import Layout from '../../../Layout/Layout.tsx'
import CustomButton from '../../../ui/buttons/CustomButton.tsx'
import ErrorMessage from '../../../ui/fields/ErrorMessage.tsx'
import Heading from '../../../ui/fields/Heading/Heading.tsx'
import CustomInput from '../../../ui/inputs/CustomInput/CustomInput.tsx'
import CustomSelect from '../../../ui/selects/CustomSelect.tsx'
import useUserInitialData from '../useUserInitialData.tsx'

import styles from './UserDetailsComponent.module.scss'
import { useGetGroups } from '@/queries/group.queries.ts'
import { useGetUser, useUpdateUser } from '@/queries/user.queries.ts'

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
