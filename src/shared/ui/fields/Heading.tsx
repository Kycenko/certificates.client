import { ReactNode } from 'react'

import styles from '@shared/styles/Fields.module.scss'

interface IHeading {
	title: string
	children?: ReactNode
}

const Heading = ({ title, children }: IHeading) => {
	return (
		<div>
			<h1 className={styles.heading}>
				{title}
				{children}
			</h1>

			<div className={styles.underLine} />
		</div>
	)
}

export default Heading
