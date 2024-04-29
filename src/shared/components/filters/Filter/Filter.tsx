import {
	ChangeEvent,
	Dispatch,
	FC,
	ReactNode,
	SetStateAction,
	memo,
	useCallback
} from 'react'

import styles from './Filter.module.scss'

interface FilterProps {
	filterValue: string
	setFilterValue: Dispatch<SetStateAction<string>>
	label?: string
	children?: ReactNode
}

const Filter: FC<FilterProps> = memo(
	({ filterValue, setFilterValue, label, children }) => {
		const handleFilterChange = useCallback(
			(e: ChangeEvent<HTMLSelectElement>) => {
				setFilterValue(e.target.value)
			},
			[setFilterValue]
		)
		return (
			<div className={styles.container}>
				<label className='form-control w-full max-w-xs'>
					<div className='label'>
						<span className=''>{label}</span>
					</div>
					<select
						className='select select-bordered'
						value={filterValue}
						onChange={handleFilterChange}
					>
						{children}
					</select>
				</label>
			</div>
		)
	}
)

export default Filter
