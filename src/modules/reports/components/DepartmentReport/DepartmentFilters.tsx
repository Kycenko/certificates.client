import { Dispatch, FC, SetStateAction } from 'react'

import { IDepartmentReport } from '../../types/reports.types'

import Filter from '@/shared/components/filters/Filter/Filter'
import SortOrder from '@/shared/components/filters/SortOrder/SortOrder'

interface DepartmentFiltersProps {
	data: IDepartmentReport[] | undefined
	sortOrder: 'asc' | 'desc'
	setSortOrder: Dispatch<SetStateAction<'asc' | 'desc'>>
	filterValue: string
	setFilterValue: Dispatch<SetStateAction<string>>
}
const DepartmentFilters: FC<DepartmentFiltersProps> = ({
	data,
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
				label='Фильтрация по учебной группе:'
				filterValue={filterValue}
				setFilterValue={setFilterValue}
			>
				<option
					key={0}
					value={''}
				>
					Все группы
				</option>

				{data?.map(({ courses }) =>
					courses?.map(({ groups }) =>
						groups?.map(({ id, name }) => (
							<option
								key={id}
								value={name}
							>
								{name}
							</option>
						))
					)
				)}
			</Filter>
		</>
	)
}

export default DepartmentFilters
