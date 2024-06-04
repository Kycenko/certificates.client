import { Dispatch, FC, SetStateAction } from 'react'

import Filter from '@/components/filters/Filter/Filter'
import SortOrder from '@/components/filters/SortOrder/SortOrder'

import { IDepartmentReport } from '../../types/reports.types'

import { IGroup } from '@/modules/groups/types/group.types'
import { IHealthGroup } from '@/modules/health-groups/types/health-group.types'
import { IPhysicalEducation } from '@/modules/physical-educations/types/physical-education.types'

interface DepartmentFiltersProps {
	data: IDepartmentReport[] | undefined
	healthGroups: IHealthGroup[] | undefined
	physicalEducations: IPhysicalEducation[] | undefined
	groups: IGroup[] | undefined
	sortOrder: 'asc' | 'desc'
	setSortOrder: Dispatch<SetStateAction<'asc' | 'desc'>>
	groupValue: string
	setGroupValue: Dispatch<SetStateAction<string>>
	healthGroupValue: string
	setHealthGroupValue: Dispatch<SetStateAction<string>>
	educationValue: string
	setEducationValue: Dispatch<SetStateAction<string>>
	startDate: string
	setStartDate: Dispatch<SetStateAction<string>>
	finishDate: string
	setFinishDate: Dispatch<SetStateAction<string>>
}

const DepartmentFilters: FC<DepartmentFiltersProps> = ({
	healthGroups,
	physicalEducations,
	groups,
	sortOrder,
	setSortOrder,
	groupValue,
	setGroupValue,
	healthGroupValue,
	setHealthGroupValue,
	educationValue,
	setEducationValue,
	startDate,
	setStartDate,
	finishDate,
	setFinishDate
}) => {
	return (
		<>
			<SortOrder
				sortOrder={sortOrder}
				setSortOrder={setSortOrder}
			/>
			<Filter
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
			<Filter
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
			<label htmlFor=''>
				Дата начала
				<input
					className='input input-bordered w-full'
					type='date'
					id='startDate'
					value={startDate}
					onChange={e => setStartDate(e.target.value)}
				/>
			</label>
			<label htmlFor=''>
				Дата окончания
				<input
					className='input input-bordered w-full'
					type='date'
					id='finishDate'
					value={finishDate}
					onChange={e => setFinishDate(e.target.value)}
				/>
			</label>
		</>
	)
}

export default DepartmentFilters
