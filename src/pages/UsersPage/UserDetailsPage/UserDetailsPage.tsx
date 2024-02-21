import { Layout } from '@app/layout'
import { useGetGroups } from '@entities/Group/group.queries'
import { useGetUser, useUpdateUser } from '@entities/User/user.queries'
import { TypeUserForm } from '@entities/User/user.types.ts'
import useUserInitialData from '@features/useUserInitialData'
import { CustomButton, CustomInput, CustomSelect, Heading } from '@shared/ui'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

const UserDetailsPage = () => {
	const { id } = useParams()
	const { user, refetch } = useGetUser(id)
	const { groups } = useGetGroups()
	const { handleSubmit, register, reset } = useForm<TypeUserForm>()
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
				<span className='text-base text-gray-500'>{user?.login}</span>
			</Heading>
			<div className='flex px-6 justify-center'>
				<form
					className=' w-2/4'
					onSubmit={handleSubmit(handleEdit)}
				>
					<div className='grid grid-cols-2 gap-10'>
						<CustomInput
							label={'Логин'}
							id={'login'}
							placeholder={'Введите логин'}
							{...register('login', { required: 'Обязательное поле' })}
						/>
						<CustomInput
							label={'Пароль'}
							id={'password'}
							placeholder={'Введите новый пароль'}
							type={'password'}
							{...register('password')}
						/>
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
					<div className='flex justify-center mt-6'>
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

export default UserDetailsPage
