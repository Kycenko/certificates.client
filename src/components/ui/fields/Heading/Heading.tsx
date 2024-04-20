import { ReactNode } from 'react'

import styles from './Heading.module.scss'

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
