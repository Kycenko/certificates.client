import {ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useRef, useState} from 'react'

import styles from './Search.module.scss'
import useDebounce from '@/shared/hooks/useDebounce.ts'

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
	const [inputValue, setInputValue] = useState(searchTerm)
	const inputRef = useRef<HTMLInputElement>(null)
	const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
	}
	const debouncedValue = useDebounce(inputValue, 300)

	useEffect(() => {
		setSearchTerm(debouncedValue)
	}, [debouncedValue, setSearchTerm])

	const handleKeyDown = (e: KeyboardEvent) => {
		if (
			(e.altKey && e.key.toLowerCase() === 's') ||
			(e.altKey && e.key.toLowerCase() === 'ы')
		) {
			e.preventDefault()
			inputRef.current?.focus()
		}
	}

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [handleKeyDown])

	return (
		<div className={styles.container}>
			<label className='input input-bordered flex items-center gap-2'>
				<input
					ref={inputRef}
					className={styles.input}
					value={inputValue}
					placeholder={placeholder ? placeholder : 'Поиск...'}
					onChange={handleSearchChange}
				/>
				<kbd className='kbd'>Alt + S</kbd>
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
