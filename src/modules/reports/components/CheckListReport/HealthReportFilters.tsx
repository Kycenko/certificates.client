import { Dispatch, FC, SetStateAction } from 'react'

import { IHealthReport } from '../../types/reports.types'

import Filter from '@/shared/components/filters/Filter/Filter'
import SortOrder from '@/shared/components/filters/SortOrder/SortOrder'

interface HealthReportFiltersProps {
	data: IHealthReport[] | undefined
	sortOrder: 'asc' | 'desc'
	setSortOrder: Dispatch<SetStateAction<'asc' | 'desc'>>
	filterValue: string
	setFilterValue: Dispatch<SetStateAction<string>>
}

const HealthReportFilters: FC<HealthReportFiltersProps> = ({
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

				{data?.map(({ groups }) =>
					groups?.map(({ id, name }) => (
						<option
							key={id}
							value={name}
						>
							{name}
						</option>
					))
				)}
			</Filter>
		</>
	)
}

export default HealthReportFilters
