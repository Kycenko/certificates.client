import { ReactNode, memo } from 'react'

import styles from './Heading.module.scss'

interface IHeading {
	title: string
	children?: ReactNode
}

const Heading = memo(({ title, children }: IHeading) => {
	return (
		<div>
			<h1 className={styles.heading}>
				{title}
				{children}
			</h1>

			<hr className={styles.underLine} />
		</div>
	)
})

export default Heading
