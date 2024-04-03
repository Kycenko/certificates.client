import { SearchIcon } from 'lucide-react'
import { ChangeEvent, FC, useEffect, useState } from 'react'

import useDebounce from '@/hooks/useDebounce'

import styles from './Search.module.scss'

const Search: FC = () => {
	const [searchValue, setSearchValue] = useState<string>('')

	const debouncedValue = useDebounce(searchValue, 300)
	useEffect(() => {}, [debouncedValue])

	return (
		<div className={styles.container}>
			<input
				className={styles.input}
				value={searchValue}
				placeholder={'Поиск...'}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setSearchValue(e.target.value)
				}
			/>
			<SearchIcon className={styles.icon} />
		</div>
	)
}

export default Search
