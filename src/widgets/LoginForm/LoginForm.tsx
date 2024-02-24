import { ILogin, useLogin } from '@shared/auth'
import { CustomInput, ErrorMessage } from '@shared/ui'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import styles from './LoginForm.module.scss'

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<ILogin>({ mode: 'onChange' })

	const { mutateAsync } = useLogin()
	const [loginError, setLoginError] = useState<string | null>(null)
	const [showPassword, setShowPassword] = useState(false)

	const handleLogin = async (data: ILogin) => {
		try {
			await mutateAsync(data)
			setLoginError(null)
		} catch (error) {
			setLoginError('Неверный логин или пароль')
			reset()
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.form}>
				<h1 className={styles.title}>Авторизация</h1>
				<form onSubmit={handleSubmit(handleLogin)}>
					<div>
						<CustomInput
							id={'name'}
							label={'Логин:'}
							{...register('login', {
								required: 'Обязательное поле',
								minLength: { value: 5, message: 'Минимум 5 символов' },
								maxLength: { value: 30, message: 'Максимум 30 символов' }
							})}
						/>
					</div>
					<ErrorMessage error={errors.login} />
					<div className={styles.checkPassContainer}>
						<CustomInput
							id={'password'}
							label={'Пароль:'}
							type={showPassword ? 'text' : 'password'}
							{...register('password', {
								required: 'Обязательное поле',
								minLength: { value: 6, message: 'Минимум 6 символов' },
								maxLength: { value: 40, message: 'Максимум 40 символов' }
							})}
						/>
						<button
							type='button'
							className={styles.togglePassword}
							onClick={() => setShowPassword(prev => !prev)}
						>
							{showPassword ? <Eye size={25} /> : <EyeOff size={25} />}
						</button>
					</div>
					<ErrorMessage error={errors.password} />
					{loginError && <p className='text-red-500'>{loginError}</p>}
					<div className={styles.btnContainer}>
						<button
							className={styles.loginBtn}
							type='submit'
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
