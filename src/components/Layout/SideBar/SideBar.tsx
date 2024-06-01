import { CircleUserRound, LogOut } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

import styles from './SideBar.module.scss'
import { PAGES_URL } from '@/shared/constants/enums.ts'
import { removeFromStorage } from '@/shared/helpers/auth.helper.ts'
import useAuth from '@/shared/hooks/useAuth.ts'

const Sidebar = () => {
	const navigate = useNavigate()
	const { user } = useAuth()
	const handleLogout = () => {
		removeFromStorage()
		navigate(`${PAGES_URL.LOGIN}`, { replace: true })
	}

	return user?.isAdmin ? (
		<div className={styles.main}>
			<div>
				<Link
					to={`${PAGES_URL.HOME}`}
					className={styles.link}
				>
					{/* <LayoutGrid
						size={15}
						className={styles.padding}
					/> */}
					Главная
				</Link>

				<Link
					to={`${PAGES_URL.USERS}`}
					className={styles.link}
				>
					{/* <UserCog
						size={15}
						className={styles.padding}
					/> */}
					Пользователи
				</Link>
				<Link
					to={`${PAGES_URL.PHYSICAL_EDUCATIONS}`}
					className={styles.link}
				>
					{/* <Zap
						size={15}
						className={styles.padding}
					/> */}
					Группы по физкультуре
				</Link>
				<Link
					to={`${PAGES_URL.HEALTHS_GROUPS}`}
					className={styles.link}
				>
					{/* <HeartPulse
						size={15}
						className={styles.padding}
					/> */}
					Группы здоровья
				</Link>

				<Link
					to={`${PAGES_URL.DEPARTMENTS}`}
					className={styles.link}
				>
					{/* <Component
						size={15}
						className={styles.padding}
					/> */}
					Отделения
				</Link>
				<Link
					to={`${PAGES_URL.COURSES}`}
					className={styles.link}
				>
					{/* <Component
						size={15}
						className={styles.padding}
					/> */}
					Курсы
				</Link>
				<Link
					to={`${PAGES_URL.GROUPS}`}
					className={styles.link}
				>
					{/* <Component
						className={styles.padding}
						size={15}
					/> */}
					Группы
				</Link>
				<Link
					to={`${PAGES_URL.STUDENTS}`}
					className={styles.link}
				>
					{/* <Users
						size={15}
						className={styles.padding}
					/> */}
					Обучающиеся
				</Link>
				<Link
					to={`${PAGES_URL.MEDICAL_CERTIFICATES}`}
					className={styles.link}
				>
					{/* <ClipboardPlus
						size={15}
						className={styles.padding}
					/> */}
					Медицинские справки
				</Link>
			</div>
			<div>
				<Link
					to={`${PAGES_URL.USERS}/${user?.id}`}
					className={styles.link}
				>
					<CircleUserRound
						size={15}
						className={styles.padding}
					/>
					Профиль
				</Link>
				<button
					onClick={handleLogout}
					className={styles.link}
				>
					<LogOut
						size={15}
						className={styles.padding}
					/>
					Выйти
				</button>
			</div>
		</div>
	) : (
		<div className={styles.main}>
			<div className={styles.linksContainer}></div>
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
