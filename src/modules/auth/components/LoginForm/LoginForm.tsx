import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import styles from './LoginForm.module.scss'
import { useLogin } from '@/modules/auth/api/auth.queries.ts'
import { ILogin } from '@/modules/auth/types/auth.types.ts'
import { PAGES_URL } from '@/shared/constants/enums.ts'
import { loginValidationSchema } from '@/shared/helpers/validation.schema.ts'
import useAuth from '@/shared/hooks/useAuth.ts'
import ErrorMessage from '@/shared/ui/fields/ErrorMessage.tsx'
import CustomInput from '@/shared/ui/inputs/CustomInput/CustomInput.tsx'

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

	const { user } = useAuth()
	const navigate = useNavigate()
	const { mutateAsync } = useLogin()
	const [loginError, setLoginError] = useState<string | null>(null)
	const [showPassword, setShowPassword] = useState<boolean>(false)

	const handleLogin = async (data: ILogin) => {
		try {
			await mutateAsync(data)

			// if (user?.isAdmin) navigate(`${PAGES_URL.HOME}`, { replace: true })
			// else navigate(`${PAGES_URL.GROUPS}/${user?.groupId}`, { replace: true })
		} catch (error) {
			setLoginError('Неверный логин или пароль')
			reset()
		}
	}

	useEffect(() => {
		if (user?.isAdmin) {
			navigate(`${PAGES_URL.HOME}`, { replace: true })
		} else if (user?.groupId) {
			navigate(`${PAGES_URL.GROUPS}/${user.groupId}`, { replace: true })
		}
	}, [user])

	return (
		<div className={styles.container}>
			<div className={styles.form}>
				<h1 className={styles.title}>Авторизация</h1>
				<form onSubmit={handleSubmit(handleLogin)}>
					<div>
						<CustomInput
							id={'name'}
							label={'Логин:'}
							placeholder='Введите логин...'
							{...register('login')}
						/>
					</div>
					<ErrorMessage error={errors.login} />
					<div className={styles.checkPassContainer}>
						<CustomInput
							id={'password'}
							label={'Пароль:'}
							placeholder='Введите пароль...'
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
					{loginError && <p className={'text-red-500'}>{loginError}</p>}
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
