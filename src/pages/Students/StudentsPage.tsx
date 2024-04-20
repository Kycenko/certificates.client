import Layout from '@/components/Layout/Layout'
import StudentsTable from '@/components/tables/Students/StudentsTable.tsx'
import Heading from '@/components/ui/fields/Heading/Heading'

const StudentsPage = () => {
	return (
		<Layout>
			<Heading title='Список учащихся' />
			<StudentsTable />
		</Layout>
	)
}

export default StudentsPage
