import { Dispatch, FC, SetStateAction } from 'react'

import Filter from '@/components/filters/Filter/Filter'
import SortOrder from '@/components/filters/SortOrder/SortOrder'

import { IGroup } from '@/modules/groups/types/group.types'

interface MedicalCertificatesFiltersProps {
	groups: IGroup[] | undefined
	sortOrder: 'asc' | 'desc'
	setSortOrder: Dispatch<SetStateAction<'asc' | 'desc'>>
	filterValue: string
	setFilterValue: Dispatch<SetStateAction<string>>
}
const MedicalCertificatesFilters: FC<MedicalCertificatesFiltersProps> = ({
	groups,
	sortOrder,
	setSortOrder,
	filterValue,
	setFilterValue
}) => {
	return (
		<>
			<SortOrder
				sortOrder={sortOrder}
				setSortOrder={setSortOrder}
			/>
			<Filter
				label='Фильтрация по группам:'
				filterValue={filterValue}
				setFilterValue={setFilterValue}
			>
				<option value=''>Все группы</option>
				{groups?.map(group => (
					<option
						key={group.id}
						value={group.name}
					>
						{group.name}
					</option>
				))}
			</Filter>
		</>
	)
}

export default MedicalCertificatesFilters
