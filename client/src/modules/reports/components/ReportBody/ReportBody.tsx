import { format } from 'date-fns'
import { FC, ReactNode, RefObject } from 'react'

import styles from './ReportBody.module.scss'

interface ReportBodyProps {
	printRef: RefObject<HTMLDivElement>
	header: any
	title?: JSX.Element[] | undefined
	children: ReactNode
}

const ReportBody: FC<ReportBodyProps> = ({
	printRef,
	header,
	title,
	children
}) => {
	return (
		<div
			ref={printRef}
			className={styles.container}
		>
			<div>
				<b>{format(new Date(), 'dd.MM.yyyy')}</b>
			</div>
			<div className={styles.heading}>
				Частное учреждение образования <b>"Колледж бизнеса и права"</b>
			</div>
			<div className={styles.header}>
				{header}
				<b className={styles.title}>{title}</b>
			</div>

			<div className={styles.main}>{children}</div>
		</div>
	)
}

export default ReportBody
