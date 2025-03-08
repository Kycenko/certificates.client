import { FC, PropsWithChildren } from 'react'

import Header from '@/components/Layout/Header/Header.tsx'
import styles from '@/components/Layout/Layout.module.scss'
import Sidebar from '@/components/Layout/SideBar/SideBar.tsx'

import useAuth from '@/shared/hooks/useAuth'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	const { user } = useAuth()
	return (
		<div className={user?.isAdmin === false ? '' : styles.sideBar}>
			{user?.isAdmin === false ? null : <Sidebar />}
			<div className={styles.header}>
				<Header />
				<div className={styles.main}>{children}</div>
			</div>
		</div>
	)
}

export default Layout
