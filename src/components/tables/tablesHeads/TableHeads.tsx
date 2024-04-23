import { FC, memo } from 'react'

import styles from '@/app/styles/Tables.module.scss'

interface TableHeadsProps {
	className?: string
	data: string[]
}

const TableHeads: FC<TableHeadsProps> = memo(({ className, data }) => {
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
})

export default TableHeads
