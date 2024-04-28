import { FC, PropsWithChildren, memo } from 'react'

import Header from '@/app/Layout/Header/Header.tsx'
import Sidebar from '@/app/Layout/SideBar/SideBar.tsx'

import styles from '@/app/Layout/Layout.module.scss'

const Layout: FC<PropsWithChildren> = memo(({ children }) => {
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
