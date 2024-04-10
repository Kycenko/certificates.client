import { ChangeEvent } from 'react'

import styles from '@/components/SortOrder/SortOrder.module.scss'

import useFilters from '@/hooks/useFilters'

const FilterCourse = () => {
	const { courseNumber, setCourseNumber } = useFilters()
	const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setCourseNumber(e.target.value)
	}

	return (
		<div className={styles.container}>
			<label className={styles.label}>Фильтрация по номеру курса:</label>
			<select
				value={courseNumber}
				onChange={handleFilterChange}
				className={styles.select}
			>
				<option
					key={1}
					value={1}
				>
					1 курс
				</option>
				<option
					key={2}
					value={2}
				>
					2 курс
				</option>
				<option
					key={3}
					value={3}
				>
					3 курс
				</option>
				<option
					key={4}
					value={4}
				>
					4 курс
				</option>
			</select>
		</div>
	)
}

export default FilterCourse
