import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { ILogin } from '@/types/auth.types'

import ErrorMessage from '../ui/fields/ErrorMessage'
import CustomInput from '../ui/inputs/CustomInput'

import styles from './LoginForm.module.scss'
import { loginValidationSchema } from '@/lib/validation/validation.schema.ts'
import { useLogin } from '@/queries/auth.queries'

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
		reset
	} = useForm<ILogin>({
		mode: 'onChange',
		resolver: zodResolver(loginValidationSchema)
	})

	const { mutateAsync } = useLogin()

	const [showPassword, setShowPassword] = useState(false)

	const handleLogin = async (data: ILogin) => {
		try {
			await mutateAsync(data)
		} catch (error) {
			setError('root', { message: 'Неверный логин или пароль' })
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
					{errors.root && <p className='text-red-500'>{errors.root.message}</p>}
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
