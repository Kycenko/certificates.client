import { FC, PropsWithChildren } from 'react'

import Sidebar from '../SideBar/SideBar'

import styles from './Layout.module.scss'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.sideBar}>
			<Sidebar />
			<div className={styles.main}>{children}</div>
		</div>
	)
}

export default Layout
