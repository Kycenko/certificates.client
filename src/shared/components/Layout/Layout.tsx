import { FC, PropsWithChildren, memo } from 'react'

import Header from '@/shared/components/Layout/Header/Header.tsx'
import styles from '@/shared/components/Layout/Layout.module.scss'
import Sidebar from '@/shared/components/Layout/SideBar/SideBar.tsx'

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
