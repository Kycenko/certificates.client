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
			<label className={styles.labelContainer}>
				<div className={styles.lab}>
					<span>{label}</span>
				</div>
				<select
					className={styles.sel}
					value={filterValue}
					onChange={handleFilterChange}
				>
					{children}
				</select>
			</label>
		</div>
	)
}

export default Filter
