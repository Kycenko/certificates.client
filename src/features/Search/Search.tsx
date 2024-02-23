import { selectSearchTerm, setSearchTerm } from '.'
import { useAppDispatch, useAppSelector, useDebounce } from '@shared/hooks'
import { SearchIcon } from 'lucide-react'
import { ChangeEvent, FC, useEffect } from 'react'

import styles from './Search.module.scss'

const Search: FC = () => {
	const dispatch = useAppDispatch()
	const searchTerm = useAppSelector(selectSearchTerm)
	const debouncedValue = useDebounce(searchTerm, 300)
	useEffect(() => {}, [debouncedValue])

	return (
		<div className={styles.container}>
			<input
				className={styles.input}
				value={searchTerm}
				placeholder={'Поиск...'}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					dispatch(setSearchTerm(e.target.value))
				}
			/>
			<SearchIcon className={styles.icon} />
		</div>
	)
}

export default Search
