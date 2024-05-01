import { memo, useState } from 'react'

import ModalExpiredCertificatesReport from './report-modals/ModalExpiredCertificatesReport'
import useAuth from '@/modules/auth/hooks/useAuth.ts'
import Dropdown from '@/shared/components/Layout/Header/DropDown/DropDown.tsx'
import styles from '@/shared/components/Layout/Header/Header.module.scss'
import ModalDepartmentReport from '@/shared/components/Layout/Header/report-modals/ModalDepartmentReport.tsx'
import ModalGroupReport from '@/shared/components/Layout/Header/report-modals/ModalGroupReport.tsx'
import ModalHealthReport from '@/shared/components/Layout/Header/report-modals/ModalHealthReport.tsx'

const Header = memo(() => {
	const { user } = useAuth()
	const [isDepartmentModalOpen, setIsDepartmentModalOpen] = useState(false)
	const [isGroupModalOpen, setIsGroupModalOpen] = useState(false)
	const [isHealthModalOpen, setIsHealthModalOpen] = useState(false)
	const [isExpiredModalOpen, setIsExpiredModalOpen] = useState(false)

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
				<li
					onClick={() => setIsExpiredModalOpen(true)}
					className={styles.liItem}
				>
					Отчет по истёкшим справкам
				</li>
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
			<ModalExpiredCertificatesReport
				isOpen={isExpiredModalOpen}
				onClose={() => setIsExpiredModalOpen(false)}
			/>
		</div>
	) : null
	// <div className={styles.userContainer}>
	// 	<span>{user?.login}</span>
	// </div>
})

export default Header
