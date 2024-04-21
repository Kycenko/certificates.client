import { useState } from 'react'

import ModalDepartmentReport from '@/components/Layout/Header/report-modals/ModalDepartmentReport'
import ModalGroupReport from '@/components/Layout/Header/report-modals/ModalGroupReport'
import ModalHealthReport from '@/components/Layout/Header/report-modals/ModalHealthReport'

import Dropdown from './DropDown/DropDown'
import styles from './Header.module.scss'
import useAuth from '@/lib/hooks/useAuth.ts'

const Header = () => {
	const { user } = useAuth()
	const [isDepartmentModalOpen, setIsDepartmentModalOpen] = useState(false)
	const [isGroupModalOpen, setIsGroupModalOpen] = useState(false)
	const [isHealthModalOpen, setIsHealthModalOpen] = useState(false)

	return user?.isAdmin ? (
		<div className={styles.adminContainer}>
			<Dropdown>
				<li
					onClick={() => setIsDepartmentModalOpen(true)}
					className={styles.liItem}
				>
					Отчёт по отделению
				</li>
				<li
					onClick={() => setIsGroupModalOpen(true)}
					className={styles.liItem}
				>
					Отчёт по группе
				</li>

				<li
					onClick={() => setIsHealthModalOpen(true)}
					className={styles.liItem}
				>
					Листок здоровья по физкультуре
				</li>
				<li className={styles.liItem}>Отчет по группе здоровья</li>
			</Dropdown>

			<ModalDepartmentReport
				isOpen={isDepartmentModalOpen}
				onClose={() => setIsDepartmentModalOpen(false)}
			/>
			<ModalGroupReport
				isOpen={isGroupModalOpen}
				onClose={() => setIsGroupModalOpen(false)}
			/>
			<ModalHealthReport
				isOpen={isHealthModalOpen}
				onClose={() => setIsHealthModalOpen(false)}
			/>
		</div>
	) : (
		<div className={styles.userContainer}>
			<span>{user?.login}</span>
		</div>
	)
}

export default Header
