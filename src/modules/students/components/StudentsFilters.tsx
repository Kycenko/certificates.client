import { Dispatch, FC, SetStateAction } from 'react'

import { IGroup } from '@/modules/groups/types/group.types'
import Filter from '@/shared/components/filters/Filter/Filter'
import Search from '@/shared/components/filters/Search/Search'
import SortOrder from '@/shared/components/filters/SortOrder/SortOrder'

interface StudentsFiltersProps {
	groups: IGroup[] | undefined
	searchTerm: string
	setSearchTerm: Dispatch<SetStateAction<string>>
	sortOrder: 'asc' | 'desc'
	setSortOrder: Dispatch<SetStateAction<'asc' | 'desc'>>
	filterValue: string
	setFilterValue: Dispatch<SetStateAction<string>>
}

const StudentsFilters: FC<StudentsFiltersProps> = ({
	groups,
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
				placeholder={'Поиск по фамилии обучающегося...'}
			/>
			<SortOrder
				sortOrder={sortOrder}
				setSortOrder={setSortOrder}
			/>
			<Filter
				label=''
				filterValue={filterValue}
				setFilterValue={setFilterValue}
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

export default StudentsFilters
