import { SearchIcon } from 'lucide-react'
import { ChangeEvent, FC, useEffect } from 'react'

import useDebounce from '@/hooks/useDebounce'
import useFilters from '@/hooks/useFilters'

import styles from './Search.module.scss'


interface SearchProps {
	placeholder?: string
}

const Search: FC<SearchProps> = ({ placeholder }) => {
	const { searchTerm, setSearchTerm } = useFilters()
	const debouncedValue = useDebounce(searchTerm, 500)
	useEffect(() => {}, [debouncedValue])

	return (
		<div className={styles.container}>
			<input
				className={styles.input}
				value={searchTerm}
				placeholder={placeholder ? placeholder : 'Поиск...'}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setSearchTerm(e.target.value)
				}
			/>
			<SearchIcon className={styles.icon} />
		</div>
	)
}

export default Search
