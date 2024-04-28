import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { ILogin } from '@/modules/auth/types/auth.types.ts'

import ErrorMessage from '@/shared/ui/fields/ErrorMessage.tsx'
import CustomInput from '@/shared/ui/inputs/CustomInput/CustomInput.tsx'

import styles from './LoginForm.module.scss'
import { loginValidationSchema } from '@/shared/validation/validation.schema.ts'
import { useLogin } from '@/modules/auth/queries/auth.queries.ts'

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },

		reset
	} = useForm<ILogin>({
		mode: 'onChange',
		resolver: zodResolver(loginValidationSchema)
	})

	const { mutateAsync } = useLogin()
	const [loginError, setLoginError] = useState<string | null>(null)
	const [showPassword, setShowPassword] = useState<boolean>(false)

	const handleLogin = async (data: ILogin) => {
		try {
			await mutateAsync(data)
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
							{...register('login')}
						/>
					</div>
					<ErrorMessage error={errors.login} />
					<div className={styles.checkPassContainer}>
						<CustomInput
							id={'password'}
							label={'Пароль:'}
							type={showPassword ? 'text' : 'password'}
							{...register('password')}
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
					{loginError && <p>{loginError}</p>}
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
