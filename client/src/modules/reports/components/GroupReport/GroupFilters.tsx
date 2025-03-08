import { Dispatch, FC, SetStateAction } from 'react'

import Filter from '@/components/filters/Filter/Filter'
import SortOrder from '@/components/filters/SortOrder/SortOrder'

import { IHealthGroup } from '@/modules/health-groups/types/health-group.types'
import { IPhysicalEducation } from '@/modules/physical-educations/types/physical-education.types'

interface GroupFiltersProps {
	healthGroups: IHealthGroup[] | undefined
	physicalEducations: IPhysicalEducation[] | undefined
	sortOrder: 'asc' | 'desc'
	setSortOrder: Dispatch<SetStateAction<'asc' | 'desc'>>
	healthValue: string
	setHealthValue: Dispatch<SetStateAction<string>>
	educationValue: string
	setEducationValue: Dispatch<SetStateAction<string>>
	startDate: string
	setStartDate: Dispatch<SetStateAction<string>>
	finishDate: string
	setFinishDate: Dispatch<SetStateAction<string>>
}

const GroupFilters: FC<GroupFiltersProps> = ({
	healthGroups,
	physicalEducations,
	sortOrder,
	setSortOrder,
	healthValue,
	setHealthValue,
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
				label=''
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
				label=''
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
			<label htmlFor=''>
				{' '}
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

export default GroupFilters
