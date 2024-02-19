import LoginForm from '@/widgets/LoginForm/LoginForm.tsx'
import styles from './LoginPage.module.scss'

const LoginPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.image}>
				<img src='/logo.webp' alt='Logo' />
			</div>
			<LoginForm />
		</div>
	)
}

export default LoginPage
