import LoginForm from '@/shared/ui/forms/LoginForm/LoginForm'

import styles from './LoginPage.module.scss'

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
