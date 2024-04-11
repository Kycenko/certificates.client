import Layout from '@/components/Layout/Layout'
import StudentsTable from '@/components/tables/StudentsTable'
import Heading from '@/components/ui/fields/Heading'

const StudentsPage = () => {
	return (
		<Layout>
			<Heading title='Список учащихся' />
			<StudentsTable />
		</Layout>
	)
}

export default StudentsPage
