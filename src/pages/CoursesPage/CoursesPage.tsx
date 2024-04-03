import Layout from '@/components/Layout/Layout'
import CoursesTable from '@/components/tables/CoursesTable'
import Heading from '@/components/ui/fields/Heading'

const CoursesPage = () => {
	return (
		<Layout>
			<Heading title='Список курсов' />
			<CoursesTable />
		</Layout>
	)
}

export default CoursesPage
