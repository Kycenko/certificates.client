import { memo } from 'react'

import styles from '@/shared/styles/DetailsTables.module.scss'

const DetailsTableHeads = memo(({ data }: { data: string[] }) => {
	return (
		<tr className={styles.tHeads}>
			{data?.map(head => (
				<th
					key={head}
					className={styles.head}
				>
					{head}
				</th>
			))}
		</tr>
	)
})

export default DetailsTableHeads
