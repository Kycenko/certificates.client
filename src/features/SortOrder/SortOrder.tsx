import { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectSortOrder, setSortOrder } from './sort.slice'

const SortOrder = () => {
	const dispatch = useDispatch()
	const sortOrder = useSelector(selectSortOrder)

	const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const selectedSortOrder = e.target.value as 'asc' | 'desc'
		dispatch(setSortOrder(selectedSortOrder))
	}

	return (
		<div className='flex items-center space-x-2'>
			<label className='text-gray-700'>Сортировка:</label>
			<select
				value={sortOrder}
				onChange={handleSortChange}
				className='rounded border border-gray-300 px-2 py-1 focus:border-blue-500 focus:outline-none'
			>
				<option value='asc'>По возрастанию</option>
				<option value='desc'>По убыванию</option>
			</select>
		</div>
	)
}

export default SortOrder
