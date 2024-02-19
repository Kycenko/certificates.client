import { Layout } from '@app/layout'
import { Heading } from '@shared/ui'
import DepartmentsTable from '@widgets/tables/DepartmentsTable.tsx'

const DepartmentsPage = () => {
	return (
		<Layout>
			<Heading title='Список отделений' />
			<DepartmentsTable />
		</Layout>
	)
}

export default DepartmentsPage
