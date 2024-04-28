import { FC } from 'react'

import styles from '@/shared/styles/Tables.module.scss'

interface TableHeadsProps {
	className?: string
	data: string[]
}

const TableHeads: FC<TableHeadsProps> = ({ className, data }) => {
	return (
		<tr className={styles.heads}>
			{data?.map(head => (
				<th
					key={head}
					className={className ? className : styles.head}
				>
					{head}
				</th>
			))}
		</tr>
	)
}

export default TableHeads
