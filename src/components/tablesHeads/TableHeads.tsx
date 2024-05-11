import { FC } from 'react'

import styles from '@/app/styles/Tables.module.scss'

interface TableHeadsProps {
	className?: string
	data: string[]
	// onSelectAll?: (checked: boolean) => void
}

const TableHeads: FC<TableHeadsProps> = ({ className, data }) => {
	return (
		<tr className={styles.heads}>
			{/* {onSelectAll && (
				<th className={className ? className : styles.head}>
					<input
						className='checkbox'
						type='checkbox'
						onChange={e => onSelectAll(e.target.checked)}
					/>
				</th>
			)} */}
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
