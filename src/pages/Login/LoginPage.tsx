import styles from './LoginPage.module.scss'
import LoginForm from '@/shared/ui/forms/LoginForm/LoginForm'

const LoginPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.image}>
				<img
					src='/logo.webp'
					alt='Logo'
				/>
			</div>
			<LoginForm />
		</div>
	)
}

export default LoginPage
