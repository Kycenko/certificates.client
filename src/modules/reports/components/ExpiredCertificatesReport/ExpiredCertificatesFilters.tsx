import { Dispatch, FC, SetStateAction } from 'react'

import CourseOptions from '@/modules/courses/helpers/course.options'
import { IDepartment } from '@/modules/departments/types/department.types'
import { IGroup } from '@/modules/groups/types/group.types'
import Filter from '@/shared/components/filters/Filter/Filter'
import SortOrder from '@/shared/components/filters/SortOrder/SortOrder'

interface ExpiredCertificatesFiltersProps {
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
}

const ExpiredCertificatesFilters: FC<ExpiredCertificatesFiltersProps> = ({
	departments,
	groups,
	departmentValue,
	setDepartmentValue,
	courseValue,
	setCourseValue,
	groupValue,
	setGroupValue,
	sortOrder,
	setSortOrder
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
				<option value=''>Все курсы</option>
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
		</>
	)
}

export default ExpiredCertificatesFilters
