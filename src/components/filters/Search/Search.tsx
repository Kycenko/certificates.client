import { SearchIcon } from 'lucide-react'
import { ChangeEvent, Dispatch, FC, SetStateAction, useEffect } from 'react'

import useDebounce from '@/hooks/useDebounce.ts'

import styles from './Search.module.scss'

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
	// const { searchTerm, setSearchTerm } = useFilters()
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
