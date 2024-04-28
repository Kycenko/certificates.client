import { Dispatch, FC, SetStateAction } from 'react'

import Filter from '@/shared/components/filters/Filter/Filter'
import SortOrder from '@/shared/components/filters/SortOrder/SortOrder'

import { IDepartment } from '@/modules/departments/types/department.types'

interface CoursesFiltersProps {
	departments: IDepartment[] | undefined
	sortOrder: 'asc' | 'desc'
	setSortOrder: Dispatch<SetStateAction<'asc' | 'desc'>>
	filterValue: string
	setFilterValue: Dispatch<SetStateAction<string>>
}

const CoursesFilters: FC<CoursesFiltersProps> = ({
	departments,
	sortOrder,
	setSortOrder,
	filterValue,
	setFilterValue
}) => {
	return (
		<>
			<SortOrder
				sortOrder={sortOrder}
				setSortOrder={setSortOrder}
			/>
			<Filter
				label='Фильтрация по отделению:'
				filterValue={filterValue}
				setFilterValue={setFilterValue}
			>
				<option
					key={0}
					value={''}
				>
					Все отделения
				</option>
				{departments?.map(({ name, id }) => (
					<option
						key={id}
						value={name}
					>
						{name}
					</option>
				))}
			</Filter>
		</>
	)
}

export default CoursesFilters
