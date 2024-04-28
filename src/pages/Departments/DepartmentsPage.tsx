import WithPageLayout from '@/shared/hoc/WithPageLayout'
import DepartmentsTable from '@/modules/departments/components/DepartmentsTable.tsx'
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
