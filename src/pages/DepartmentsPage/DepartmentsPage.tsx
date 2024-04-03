import Layout from '@/components/Layout/Layout'
import DepartmentsTable from '@/components/tables/DepartmentsTable'
import Heading from '@/components/ui/fields/Heading'

const DepartmentsPage = () => {
	return (
		<Layout>
			<Heading title='Список отделений' />
			<DepartmentsTable />
		</Layout>
	)
}

export default DepartmentsPage
