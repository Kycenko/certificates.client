import { Dispatch, FC, SetStateAction } from 'react'

import { IHealthGroup } from '@/modules/health-groups/types/health-group.types'
import { IPhysicalEducation } from '@/modules/physical-educations/types/physical-education.types'
import Filter from '@/shared/components/filters/Filter/Filter'
import SortOrder from '@/shared/components/filters/SortOrder/SortOrder'

interface GroupFiltersProps {
	healthGroups: IHealthGroup[] | undefined
	physicalEducations: IPhysicalEducation[] | undefined
	sortOrder: 'asc' | 'desc'
	setSortOrder: Dispatch<SetStateAction<'asc' | 'desc'>>
	healthValue: string
	setHealthValue: Dispatch<SetStateAction<string>>
	educationValue: string
	setEducationValue: Dispatch<SetStateAction<string>>
}

const GroupFilters: FC<GroupFiltersProps> = ({
	healthGroups,
	physicalEducations,
	sortOrder,
	setSortOrder,
	healthValue,
	setHealthValue,
	educationValue,
	setEducationValue
}) => {
	return (
		<>
			<SortOrder
				sortOrder={sortOrder}
				setSortOrder={setSortOrder}
			/>
			<Filter
				label='Фильтрация по группе здоровья:'
				filterValue={healthValue}
				setFilterValue={setHealthValue}
			>
				<option value=''>Все группы здоровья</option>
				{healthGroups?.map(({ id, name }) => (
					<option
						key={id}
						value={name}
					>
						{name}
					</option>
				))}
			</Filter>
			<Filter
				label='Фильтрация по группе по физкультуре:'
				filterValue={educationValue}
				setFilterValue={setEducationValue}
			>
				<option value=''>Все группы по физкультуре</option>
				{physicalEducations?.map(({ id, name }) => (
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

export default GroupFilters
