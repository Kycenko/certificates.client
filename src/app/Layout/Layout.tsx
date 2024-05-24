import { FC, PropsWithChildren } from 'react'

import Header from '@/app/Layout/Header/Header.tsx'
import styles from '@/app/Layout/Layout.module.scss'
import Sidebar from '@/app/Layout/SideBar/SideBar.tsx'

const Layout: FC<PropsWithChildren> = (({ children }) => {
	return (
		<div className={styles.sideBar}>
			<Sidebar />
			<div className={styles.header}>
				<Header />
				<div className={styles.main}>{children}</div>
			</div>
		</div>
	)
})

export default Layout
