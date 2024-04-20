import { ChangeEvent, Dispatch, FC, ReactNode, SetStateAction } from 'react'

import styles from './Filter.module.scss'

interface FilterProps {
	filterValue: string
	setFilterValue: Dispatch<SetStateAction<string>>
	label?: string
	children?: ReactNode
}

const Filter: FC<FilterProps> = ({
	filterValue,
	setFilterValue,
	label,
	children
}) => {
	const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setFilterValue(e.target.value)
	}

	return (
		<div className={styles.container}>
			<label className={styles.label}>{label}</label>
			<select
				value={filterValue}
				onChange={handleFilterChange}
				className={styles.select}
			>
				{children}
			</select>
		</div>
	)
}

export default Filter
