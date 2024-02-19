import { ChangeEvent, FC, useEffect } from 'react'

import {
	selectSearchTerm,
	setSearchTerm
} from '@features/Search/search.slice.ts'

import { useAppDispatch, useAppSelector, useDebounce } from '@shared/hooks'
import { SearchIcon } from 'lucide-react'

const Search: FC = () => {
	const dispatch = useAppDispatch()
	const searchTerm = useAppSelector(selectSearchTerm)
	const debouncedValue = useDebounce(searchTerm, 300)
	useEffect(() => {}, [debouncedValue])

	return (
		<div style={{ position: 'relative', display: 'inline-block' }}>
			<input
				style={{ paddingRight: '30px' }}
				className='w-[300px] rounded-md border border-gray-300 px-4 py-2 focus:border-blue-300 focus:outline-none'
				value={searchTerm}
				placeholder={'Поиск...'}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					dispatch(setSearchTerm(e.target.value))
				}
			/>
			<SearchIcon
				style={{
					position: 'absolute',
					right: '10px',
					top: '50%',
					transform: 'translateY(-50%)'
				}}
			/>
		</div>
	)
}

export default Search
