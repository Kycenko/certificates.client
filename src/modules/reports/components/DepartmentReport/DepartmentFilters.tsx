import { Dispatch, FC, SetStateAction } from 'react'

import Filter from '@/components/filters/Filter/Filter'
import SortOrder from '@/components/filters/SortOrder/SortOrder'

import { IDepartmentReport } from '../../types/reports.types'

import { IHealthGroup } from '@/modules/health-groups/types/health-group.types'
import { IPhysicalEducation } from '@/modules/physical-educations/types/physical-education.types'

interface DepartmentFiltersProps {
	data: IDepartmentReport[] | undefined
	healthGroups: IHealthGroup[] | undefined
	physicalEducations: IPhysicalEducation[] | undefined
	sortOrder: 'asc' | 'desc'
	setSortOrder: Dispatch<SetStateAction<'asc' | 'desc'>>
	filterValue: string
	setFilterValue: Dispatch<SetStateAction<string>>
	healthGroupValue: string
	setHealthGroupValue: Dispatch<SetStateAction<string>>
	educationValue: string
	setEducationValue: Dispatch<SetStateAction<string>>
}
const DepartmentFilters: FC<DepartmentFiltersProps> = ({
	data,
	healthGroups,
	physicalEducations,
	sortOrder,
	setSortOrder,
	filterValue,
	setFilterValue,
	healthGroupValue,
	setHealthGroupValue,
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
				label=''
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
			<Filter
				label=''
				filterValue={healthGroupValue}
				setFilterValue={setHealthGroupValue}
			>
				<option
					key={0}
					value={''}
				>
					Все группы здоровья
				</option>

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
				label=''
				filterValue={educationValue}
				setFilterValue={setEducationValue}
			>
				<option
					key={0}
					value={''}
				>
					Все группы по физкультуре
				</option>

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

export default DepartmentFilters
