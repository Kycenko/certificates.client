import {
	CircleUserRound,
	ClipboardPlus,
	Component,
	HeartPulse,
	LayoutGrid,
	LogOut,
	UserCog,
	Users,
	Zap
} from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

import useAuth from '@/hooks/useAuth.ts'

import styles from './SideBar.module.scss'
import { removeFromStorage } from '@/lib/helpers/auth.helper.ts'

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
					<LayoutGrid
						size={15}
						className='mr-1'
					/>
					Главная
				</Link>
				<hr />
				<Link
					to={'/users'}
					className={styles.link}
				>
					<UserCog
						size={15}
						className='mr-1'
					/>
					Пользователи
				</Link>
				<Link
					to={'/physical-educations'}
					className={styles.link}
				>
					<Zap
						size={15}
						className='mr-1'
					/>
					Группы по физкультуре
				</Link>
				<Link
					to={'/health-groups'}
					className={styles.link}
				>
					<HeartPulse
						size={15}
						className='mr-1'
					/>
					Группы здоровья
				</Link>
				<hr />
				<Link
					to={'/departments'}
					className={styles.link}
				>
					<Component
						size={15}
						className='mr-1'
					/>
					Отделения
				</Link>
				<Link
					to={'/courses'}
					className={styles.link}
				>
					<Component
						size={15}
						className='mr-1'
					/>
					Курсы
				</Link>
				<Link
					to={'/groups'}
					className={styles.link}
				>
					<Component
						size={15}
						className='mr-1'
					/>
					Группы
				</Link>
				<Link
					to={'/students'}
					className={styles.link}
				>
					<Users
						size={15}
						className='mr-1'
					/>
					Ученики
				</Link>
				<Link
					to={'/medical-certificates'}
					className={styles.link}
				>
					<ClipboardPlus
						size={15}
						className='mr-1'
					/>
					Медицинские справки
				</Link>
			</div>
			<div>
				<Link
					to={`/users/${user?.id}`}
					className={styles.link}
				>
					<CircleUserRound
						size={15}
						className='mr-1'
					/>
					Профиль
				</Link>
				<button
					onClick={handleLogout}
					className={styles.link}
				>
					<LogOut
						size={15}
						className='mr-1'
					/>
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
