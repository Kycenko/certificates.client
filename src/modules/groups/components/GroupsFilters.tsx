import { Dispatch, FC, SetStateAction } from 'react'

import CourseOptions from '@/modules/courses/helpers/course.options'
import { IDepartment } from '@/modules/departments/types/department.types'
import Filter from '@/shared/components/filters/Filter/Filter'
import Search from '@/shared/components/filters/Search/Search'
import SortOrder from '@/shared/components/filters/SortOrder/SortOrder'

interface GroupsFiltersProps {
	departments: IDepartment[] | undefined
	searchTerm: string
	setSearchTerm: Dispatch<SetStateAction<string>>
	sortOrder: 'asc' | 'desc'
	setSortOrder: Dispatch<SetStateAction<'asc' | 'desc'>>
	departmentValue: string
	setDepartmentValue: Dispatch<SetStateAction<string>>
	courseValue: string
	setCourseValue: Dispatch<SetStateAction<string>>
}

const GroupsFilters: FC<GroupsFiltersProps> = ({
	departments,
	searchTerm,
	setSearchTerm,
	sortOrder,
	setSortOrder,
	departmentValue,
	setDepartmentValue,
	courseValue,
	setCourseValue
}) => {
	return (
		<>
			<Search
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				placeholder={'Поиск по названию группы...'}
			/>
			<SortOrder
				sortOrder={sortOrder}
				setSortOrder={setSortOrder}
			/>
			<Filter
				label=''
				filterValue={departmentValue}
				setFilterValue={setDepartmentValue}
			>
				<option value={''}>Все отделения</option>
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
				label=''
				filterValue={courseValue}
				setFilterValue={setCourseValue}
			>
				<option value={''}>Все курсы</option>
				<CourseOptions />
			</Filter>
		</>
	)
}

export default GroupsFilters
