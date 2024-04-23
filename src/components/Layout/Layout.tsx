import { FC, PropsWithChildren, memo } from 'react'

import Header from '@/components/Layout/Header/Header.tsx'
import Sidebar from '@/components/Layout/SideBar/SideBar'

import styles from './Layout.module.scss'

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
