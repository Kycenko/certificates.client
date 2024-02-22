import { useLogin } from '@shared/auth/auth.queries'
import { ILogin } from '@shared/auth/auth.types'
import { CustomInput, ErrorMessage } from '@shared/ui'
import { useForm } from 'react-hook-form'

import styles from './LoginForm.module.scss'

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<ILogin>()

	const { mutate } = useLogin()

	const handleLogin = (data: ILogin) => {
		try {
			mutate(data)
		} catch (error) {
			reset()
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.form}>
				<h1 className={styles.title}>Авторизация</h1>
				<form
					className='mt-6'
					onSubmit={handleSubmit(handleLogin)}
				>
					<div className='mb-2'>
						<CustomInput
							id={'name'}
							label={'Логин:'}
							{...register('login', { required: 'Обязательное поле' })}
						/>
						<ErrorMessage error={errors.login} />
					</div>
					<div className='mb-2'>
						<CustomInput
							id={'password'}
							label={'Пароль:'}
							type={'password'}
							{...register('password', { required: 'Обязательное поле' })}
						/>
						<ErrorMessage error={errors.password} />
					</div>
					{/*{loginError && <p className='text-red-500'>{loginError}</p>}*/}
					<div className={styles.btnContainer}>
						<button
							className={styles.loginBtn}
							onSubmit={handleSubmit(handleLogin)}
						>
							Войти
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default LoginForm
