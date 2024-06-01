import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react'

import styles from './SortOrder.module.scss'

interface SortOrderProps {
	sortOrder: 'asc' | 'desc'
	setSortOrder: Dispatch<SetStateAction<'asc' | 'desc'>>
}

const SortOrder: FC<SortOrderProps> = ({ sortOrder, setSortOrder }) => {
	const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setSortOrder(e.target.value as 'asc' | 'desc')
	}

	return (
		<div className={styles.container}>
			<label className='form-control w-full max-w-xs'>
				<select
					className='select select-bordered'
					value={sortOrder}
					onChange={handleSortChange}
				>
					<option value='asc'>По возрастанию</option>
					<option value='desc'>По убыванию</option>
				</select>
			</label>
		</div>
	)
}

export default SortOrder
