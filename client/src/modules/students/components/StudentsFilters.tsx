import { Dispatch, FC, SetStateAction } from 'react'

import Filter from '@/components/filters/Filter/Filter'
import Search from '@/components/filters/Search/Search'
import SortOrder from '@/components/filters/SortOrder/SortOrder'

import { IDepartment } from '@/modules/departments/types/department.types'
import { IGroup } from '@/modules/groups/types/group.types'
import CourseOptions from '@/shared/helpers/course.options.tsx'

interface StudentsFiltersProps {
	departments: IDepartment[] | undefined
	groups: IGroup[] | undefined
	searchTerm: string
	setSearchTerm: Dispatch<SetStateAction<string>>
	sortOrder: 'asc' | 'desc'
	setSortOrder: Dispatch<SetStateAction<'asc' | 'desc'>>
	departmentValue: string
	setDepartmentValue: Dispatch<SetStateAction<string>>
	courseValue: string
	setCourseValue: Dispatch<SetStateAction<string>>
	groupValue: string
	setGroupValue: Dispatch<SetStateAction<string>>
	isExpelledValue: string
	setIsExpelledValue: Dispatch<SetStateAction<string>>
}

const StudentsFilters: FC<StudentsFiltersProps> = ({
	departments,
	groups,
	searchTerm,
	setSearchTerm,
	sortOrder,
	setSortOrder,
	departmentValue,
	setDepartmentValue,
	courseValue,
	setCourseValue,
	groupValue,
	setGroupValue,
	isExpelledValue,
	setIsExpelledValue
}) => {
	return (
		<>
			<Search
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				placeholder={'Поиск по фамилии обучающегося...'}
			/>
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
				<option value=''>Все курсы</option>

				<CourseOptions />
			</Filter>
			<Filter
				filterValue={groupValue}
				setFilterValue={setGroupValue}
			>
				<option value=''>Все группы</option>
				<option value={undefined}>Без группы</option>
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
				filterValue={isExpelledValue}
				setFilterValue={setIsExpelledValue}
			>
				<option value='false'>Не отчислены</option>
				<option value='true'>Отчислены</option>
			</Filter>
		</>
	)
}

export default StudentsFilters
