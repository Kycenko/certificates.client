import DepartmentsTable from '@/modules/departments/components/DepartmentsTable.tsx'
import WithPageLayout from '@/shared/hoc/WithPageLayout'
import Heading from '@/shared/ui/fields/Heading/Heading'

const DepartmentsPage = () => {
	return (
		<>
			<Heading title='Список отделений' />
			<DepartmentsTable />
		</>
	)
}

export default WithPageLayout(DepartmentsPage)
