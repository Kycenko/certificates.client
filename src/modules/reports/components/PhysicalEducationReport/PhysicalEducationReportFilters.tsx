import { Dispatch, FC, SetStateAction } from 'react'

import { IGroup } from '@/modules/groups/types/group.types'
import Filter from '@/shared/components/filters/Filter/Filter'
import SortOrder from '@/shared/components/filters/SortOrder/SortOrder'

interface PhysicalEducationReportFiltersProps {
	groups: IGroup[] | undefined
	sortOrder: 'asc' | 'desc'
	setSortOrder: Dispatch<SetStateAction<'asc' | 'desc'>>
	groupValue: string
	setGroupValue: Dispatch<SetStateAction<string>>
}

const PhysicalEducationReportFilters: FC<
	PhysicalEducationReportFiltersProps
> = ({ groups, sortOrder, setSortOrder, groupValue, setGroupValue }) => {
	return (
		<>
			<SortOrder
				sortOrder={sortOrder}
				setSortOrder={setSortOrder}
			/>
			<Filter
				label=''
				filterValue={groupValue}
				setFilterValue={setGroupValue}
			>
				<option
					key={0}
					value={''}
				>
					Все группы
				</option>
				{groups?.map(({ id, name }) => (
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

export default PhysicalEducationReportFilters
