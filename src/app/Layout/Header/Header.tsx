import { memo, useState } from 'react'

import Dropdown from '@/app/Layout/Header/DropDown/DropDown.tsx'
import styles from '@/app/Layout/Header/Header.module.scss'
import ModalDepartmentReport from '@/app/Layout/Header/report-modals/ModalDepartmentReport.tsx'
import ModalExpiredCertificatesReport from '@/app/Layout/Header/report-modals/ModalExpiredCertificatesReport.tsx'
import ModalGroupReport from '@/app/Layout/Header/report-modals/ModalGroupReport.tsx'
import ModalHealthGroupReport from '@/app/Layout/Header/report-modals/ModalHealthGroupReport.tsx'
import ModalPhysicalEducationReport from '@/app/Layout/Header/report-modals/ModalPhysicalEducationReport.tsx'
import useAuth from '@/shared/hooks/useAuth.ts'

const Header = memo(() => {
	const { user } = useAuth()
	const [isDepartmentModalOpen, setIsDepartmentModalOpen] = useState(false)
	const [isGroupModalOpen, setIsGroupModalOpen] = useState(false)
	const [isPhysicalEducationModalOpen, setIsPhysicalEducationOpen] =
		useState(false)
	const [isExpiredModalOpen, setIsExpiredModalOpen] = useState(false)
	const [isHealthGroupModalOpen, setIsHealthGroupModalOpen] = useState(false)

	return user?.isAdmin ? (
		<div className={styles.adminContainer}>
			<Dropdown>
				<li
					onClick={() => setIsDepartmentModalOpen(true)}
					className={styles.liItem}
				>
					Отчет по отделению
				</li>
				<li
					onClick={() => setIsGroupModalOpen(true)}
					className={styles.liItem}
				>
					Отчет по группе
				</li>

				<li
					onClick={() => setIsPhysicalEducationOpen(true)}
					className={styles.liItem}
				>
					Отчет по группе по физкультуре
				</li>
				<li
					onClick={() => setIsHealthGroupModalOpen(true)}
					className={styles.liItem}
				>
					Отчет по группе здоровья
				</li>
				<li
					onClick={() => setIsExpiredModalOpen(true)}
					className={styles.liItem}
				>
					Отчет по истекшим медицинским справкам
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
			<ModalPhysicalEducationReport
				isOpen={isPhysicalEducationModalOpen}
				onClose={() => setIsPhysicalEducationOpen(false)}
			/>
			<ModalHealthGroupReport
				isOpen={isHealthGroupModalOpen}
				onClose={() => setIsHealthGroupModalOpen(false)}
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
