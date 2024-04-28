import DepartmentsTable from '@/modules/departments/components/DepartmentsTable.tsx'
import Heading from '@/shared/ui/fields/Heading/Heading'

import WithPageLayout from '@/app/hoc/WithPageLayout'

const DepartmentsPage = () => {
	return (
		<>
			<Heading title='Список отделений' />
			<DepartmentsTable />
		</>
	)
}

export default WithPageLayout(DepartmentsPage)
