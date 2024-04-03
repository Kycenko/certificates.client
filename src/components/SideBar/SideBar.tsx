import { Link, useNavigate } from 'react-router-dom'

import { removeFromStorage } from '@/config/auth.helper'

import useAuth from '@/hooks/useAuth'

import styles from './SideBar.module.scss'

const Sidebar = () => {
	const navigate = useNavigate()
	const { user } = useAuth()
	const handleLogout = () => {
		removeFromStorage()
		navigate('/login', { replace: true })
	}

	return user?.isAdmin ? (
		<div className={styles.main}>
			<div className={styles.linksContainer}>
				<Link
					to={'/'}
					className={styles.link}
				>
					Главная
				</Link>
				<hr />
				<Link
					to={'/users'}
					className={styles.link}
				>
					Пользователи
				</Link>
				<Link
					to={'/physical-educations'}
					className={styles.link}
				>
					Группы по физкультуре
				</Link>
				<Link
					to={'/health-groups'}
					className={styles.link}
				>
					Группы здоровья
				</Link>
				<hr />
				<Link
					to={'/departments'}
					className={styles.link}
				>
					Отделения
				</Link>
				<Link
					to={'/courses'}
					className={styles.link}
				>
					Курсы
				</Link>
				<Link
					to={'/groups'}
					className={styles.link}
				>
					Группы
				</Link>
				<Link
					to={'/students'}
					className={styles.link}
				>
					Ученики
				</Link>
				<Link
					to={'/medical-certificates'}
					className={styles.link}
				>
					Медицинские справки
				</Link>
			</div>
			<div>
				<Link
					to={`/users/${user?.id}`}
					className={styles.link}
				>
					Профиль
				</Link>
				<button
					onClick={handleLogout}
					className={styles.link}
				>
					Выйти
				</button>
			</div>
		</div>
	) : (
		<div className={styles.main}>
			<div className={styles.linksContainer}>
				<Link
					to={'/groups'}
					className={styles.link}
				>
					Группы
				</Link>
			</div>
			<div>
				<button
					onClick={handleLogout}
					className={styles.link}
				>
					Выйти
				</button>
			</div>
		</div>
	)
}
export default Sidebar
