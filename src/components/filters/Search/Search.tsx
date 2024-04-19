import { SearchIcon } from 'lucide-react'
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
