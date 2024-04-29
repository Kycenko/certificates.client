import { Dispatch, FC, SetStateAction } from 'react'

import { IGroup } from '@/modules/groups/types/group.types'
import Filter from '@/shared/components/filters/Filter/Filter'
import SortOrder from '@/shared/components/filters/SortOrder/SortOrder'

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
