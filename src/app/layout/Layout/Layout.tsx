import { Header, Sidebar } from '..'
import { FC, PropsWithChildren } from 'react'

import styles from './Layout.module.scss'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.sideBar}>
			<Sidebar />
			<div className={styles.header}>
				<Header />
				<div className={styles.main}>{children}</div>
			</div>
		</div>
	)
}

export default Layout
