import { ChangeEvent } from 'react'

import styles from '@/components/SortOrder/SortOrder.module.scss'

import useFilters from '@/hooks/useFilters'

import { useGetGroups } from '@/queries/group.queries'

const FilterComponent = () => {
	const { groupName, setGroupName } = useFilters()
	const { groups } = useGetGroups()
	const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setGroupName(e.target.value)
	}

	return (
		<div className={styles.container}>
			<label className={styles.label}>Фильтрация по группе:</label>
			<select
				value={groupName}
				onChange={handleFilterChange}
				className={styles.select}
			>
				{groups?.map(({ id, name }) => (
					<option
						key={id}
						value={name}
					>
						{name}
					</option>
				))}
			</select>
		</div>
	)
}

export default FilterComponent
