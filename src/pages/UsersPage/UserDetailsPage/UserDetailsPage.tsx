import { Layout } from '@app/layout'
import { useUpdateUser } from '@entities/User/user.queries'
import { TypeUserForm } from '@entities/User/user.types.ts'
import { useUserInitialData } from '@features/User'
import { CustomButton, CustomInput, CustomSelect, Heading } from '@shared/ui'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

const UserDetailsPage = () => {
	const { id } = useParams()

	const { handleSubmit, register, reset } = useForm<TypeUserForm>()
	useUserInitialData(id, reset)
	const { mutateAsync, isPending } = useUpdateUser()
	const handleEdit: SubmitHandler<TypeUserForm> = async (
		data: TypeUserForm
	) => {
		const { password, ...rest } = data
		await mutateAsync({
			id: id,
			data: {
				...rest,
				password: password || undefined
			}
		})
	}

	return (
		<Layout>
			<Heading title={'Описание пользователя'} />
			<div className='flex'>
				<form className=' w-2/4' onSubmit={handleSubmit(handleEdit)}>
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
					</div>
					<div>
						<CustomButton type={'submit'} disabled={isPending}>
							Сохранить
						</CustomButton>
					</div>
				</form>
			</div>
		</Layout>
	)
}

export default UserDetailsPage
