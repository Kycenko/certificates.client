import { Dispatch, FC, SetStateAction } from 'react'

import { IGroup } from '@/modules/groups/types/group.types'
import Filter from '@/shared/components/filters/Filter/Filter'
import SortOrder from '@/shared/components/filters/SortOrder/SortOrder'

interface MedicalCertificatesFiltersProps {
	groups: IGroup[] | undefined
	sortOrder: 'asc' | 'desc'
	setSortOrder: Dispatch<SetStateAction<'asc' | 'desc'>>
	// courseValue: string
	// setCourseValue: Dispatch<SetStateAction<string>>
	groupValue: string
	setGroupValue: Dispatch<SetStateAction<string>>
}
const MedicalCertificatesFilters: FC<MedicalCertificatesFiltersProps> = ({
	groups,
	sortOrder,
	setSortOrder,
	// courseValue,
	// setCourseValue,
	groupValue,
	setGroupValue
}) => {
	return (
		<>
			<SortOrder
				sortOrder={sortOrder}
				setSortOrder={setSortOrder}
			/>
			{/* <Filter
				label=''
				filterValue={courseValue}
				setFilterValue={setCourseValue}
			>
				<option value={''}>Все курсы</option>
				<CourseOptions />
			</Filter> */}
			<Filter
				label=''
				filterValue={groupValue}
				setFilterValue={setGroupValue}
			>
				<option value=''>Все группы</option>
				{groups?.map(group => (
					<option
						key={group.id}
						value={group.name}
					>
						Группа {group.name}
					</option>
				))}
			</Filter>
		</>
	)
}

export default MedicalCertificatesFilters
