import { Dispatch, FC, SetStateAction } from 'react'

import Filter from '@/components/filters/Filter/Filter'
import Search from '@/components/filters/Search/Search'
import SortOrder from '@/components/filters/SortOrder/SortOrder'

import { IDepartment } from '@/modules/departments/types/department.types'
import CourseOptions from '@/shared/helpers/course.options.tsx'

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
