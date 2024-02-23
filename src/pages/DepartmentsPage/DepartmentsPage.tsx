import { Layout } from '@app/layout'
import { Heading } from '@shared/ui'
import { DepartmentsTable } from '@widgets/tables'

const DepartmentsPage = () => {
	return (
		<Layout>
			<Heading title='Список отделений' />
			<DepartmentsTable />
		</Layout>
	)
}

export default DepartmentsPage
