import { ChangeEvent, Dispatch, FC, SetStateAction, useEffect } from 'react'

import styles from './Search.module.scss'
import useDebounce from '@/lib/hooks/useDebounce.ts'

interface SearchProps {
	searchTerm: string
	setSearchTerm: Dispatch<SetStateAction<string>>
	placeholder?: string
}

const Search: FC<SearchProps> = ({
	searchTerm,
	setSearchTerm,
	placeholder
}) => {
	const debouncedValue = useDebounce(searchTerm, 500)

	useEffect(() => {
		setSearchTerm(debouncedValue)
	}, [debouncedValue, setSearchTerm])

	return (
		<div className={styles.container}>
			<label className='input input-bordered flex items-center gap-2'>
				<input
					className={styles.input}
					value={searchTerm}
					placeholder={placeholder ? placeholder : 'Поиск...'}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setSearchTerm(e.target.value)
					}
				/>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 16 16'
					fill='currentColor'
					className='w-4 h-4 opacity-70'
				>
					<path
						fillRule='evenodd'
						d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
						clipRule='evenodd'
					/>
				</svg>
			</label>
		</div>
	)
}
export default Search
