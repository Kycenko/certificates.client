import { Dispatch, FC, SetStateAction } from 'react'

import Search from '@/components/filters/Search/Search'
import SortOrder from '@/components/filters/SortOrder/SortOrder'

interface DepartmentsFiltersProps {
	searchTerm: string
	setSearchTerm: Dispatch<SetStateAction<string>>
	sortOrder: 'asc' | 'desc'
	setSortOrder: Dispatch<SetStateAction<'asc' | 'desc'>>
}

const DepartmentsFilters: FC<DepartmentsFiltersProps> = ({
	searchTerm,
	setSearchTerm,
	sortOrder,
	setSortOrder
}) => {
	return (
		<>
			<Search
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				placeholder={'Поиск по названию отделения...'}
			/>
			<SortOrder
				sortOrder={sortOrder}
				setSortOrder={setSortOrder}
			/>
		</>
	)
}

export default DepartmentsFilters
