import { Layout } from '@app/layout'
import { Heading } from '@shared/ui'
import StudentsTable from '@widgets/tables/StudentsTable.tsx'

const StudentsPage = () => {
	return (
		<Layout>
			<Heading title='Список учащихся' />
			<StudentsTable />
		</Layout>
	)
}

export default StudentsPage
