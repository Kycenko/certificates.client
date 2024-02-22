import { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './SortOrder.module.scss'
import { selectSortOrder, setSortOrder } from './sort.slice'

const SortOrder = () => {
	const dispatch = useDispatch()
	const sortOrder = useSelector(selectSortOrder)

	const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const selectedSortOrder = e.target.value as 'asc' | 'desc'
		dispatch(setSortOrder(selectedSortOrder))
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
