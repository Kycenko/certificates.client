import { Dispatch, FC, SetStateAction } from 'react'

import Filter from '@/components/filters/Filter/Filter'
import SortOrder from '@/components/filters/SortOrder/SortOrder'

import { IDepartment } from '@/modules/departments/types/department.types'
import { IGroup } from '@/modules/groups/types/group.types'
import CourseOptions from '@/shared/helpers/course.options.tsx'

interface MedicalCertificatesFiltersProps {
	departments: IDepartment[] | undefined
	groups: IGroup[] | undefined
	sortOrder: 'asc' | 'desc'
	setSortOrder: Dispatch<SetStateAction<'asc' | 'desc'>>
	departmentValue: string
	setDepartmentValue: Dispatch<SetStateAction<string>>
	courseValue: string
	setCourseValue: Dispatch<SetStateAction<string>>
	groupValue: string
	setGroupValue: Dispatch<SetStateAction<string>>
	startDate: string
	setStartDate: Dispatch<SetStateAction<string>>
	finishDate: string
	setFinishDate: Dispatch<SetStateAction<string>>
}

const MedicalCertificatesFilters: FC<MedicalCertificatesFiltersProps> = ({
	departments,
	groups,
	sortOrder,
	setSortOrder,
	departmentValue,
	setDepartmentValue,
	courseValue,
	setCourseValue,
	groupValue,
	setGroupValue,
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
				filterValue={departmentValue}
				setFilterValue={setDepartmentValue}
			>
				<option value=''>Все отделения</option>
				{departments?.map(({ id, name }) => (
					<option
						key={id}
						value={name}
					>
						{name}
					</option>
				))}
			</Filter>
			<Filter
				filterValue={courseValue}
				setFilterValue={setCourseValue}
			>
				<option value={''}>Все курсы</option>
				<CourseOptions />
			</Filter>
			<Filter
				filterValue={groupValue}
				setFilterValue={setGroupValue}
			>
				<option value=''>Все группы</option>
				{groups?.map(({ id, name }) => (
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

export default MedicalCertificatesFilters
