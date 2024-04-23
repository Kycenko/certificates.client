import DepartmentsTable from '@/components/tables/Departments/DepartmentsTable.tsx'
import Heading from '@/components/ui/fields/Heading/Heading'

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
