import Layout from '@/components/Layout/Layout'
import DepartmentsTable from '@/components/tables/Departments/DepartmentsTable.tsx'
import Heading from '@/components/ui/fields/Heading/Heading'

const DepartmentsPage = () => {
	return (
		<Layout>
			<Heading title='Список отделений' />
			<DepartmentsTable />
		</Layout>
	)
}

export default DepartmentsPage
