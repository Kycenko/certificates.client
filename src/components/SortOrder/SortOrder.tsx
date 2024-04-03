import { ChangeEvent, useState } from 'react'

import styles from './SortOrder.module.scss'

const SortOrder = () => {
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

	const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setSortOrder(e.target.value as 'asc' | 'desc')
	}

	return (
		<div className={styles.container}>
			<label className={styles.label}>Сортировка:</label>
			<select
				value={sortOrder}
				onChange={handleSortChange}
				className={styles.select}
			>
				<option value='asc'>По возрастанию</option>
				<option value='desc'>По убыванию</option>
			</select>
		</div>
	)
}

export default SortOrder
