import { Dispatch, FC, SetStateAction } from 'react'

import CourseOptions from '@/modules/courses/helpers/course.options'
import Filter from '@/shared/components/filters/Filter/Filter'
import Search from '@/shared/components/filters/Search/Search'
import SortOrder from '@/shared/components/filters/SortOrder/SortOrder'

interface GroupsFiltersProps {
	searchTerm: string
	setSearchTerm: Dispatch<SetStateAction<string>>
	sortOrder: 'asc' | 'desc'
	setSortOrder: Dispatch<SetStateAction<'asc' | 'desc'>>
	filterValue: string
	setFilterValue: Dispatch<SetStateAction<string>>
}

const GroupsFilters: FC<GroupsFiltersProps> = ({
	searchTerm,
	setSearchTerm,
	sortOrder,
	setSortOrder,
	filterValue,
	setFilterValue
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
				label='Фильтрация по номеру курса:'
				filterValue={filterValue}
				setFilterValue={setFilterValue}
			>
				<option value={''}>Все курсы</option>
				<CourseOptions />
			</Filter>
		</>
	)
}

export default GroupsFilters
