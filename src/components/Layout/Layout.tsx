import {FC, PropsWithChildren} from 'react'


import styles from '@/components/Layout/Layout.module.scss'
import Sidebar from '@/components/Layout/SideBar/SideBar.tsx'
import Header from "@/components/Layout/Header/Header.tsx";

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
