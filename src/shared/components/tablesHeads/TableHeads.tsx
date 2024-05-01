import { FC } from 'react'

import styles from '@/shared/styles/Tables.module.scss'

interface TableHeadsProps {
	className?: string
	data: string[]
	onSelectAll: (checked: boolean) => void
}

const TableHeads: FC<TableHeadsProps> = ({ className, data, onSelectAll }) => {
	return (
		<tr className={styles.heads}>
			<th className={className ? className : styles.head}>
				<input
					type='checkbox'
					onChange={e => onSelectAll(e.target.checked)}
					className='checkbox'
				/>
			</th>
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
