import { Layout } from '@app/layout'
import { Heading } from '@shared/ui'
import { CoursesTable } from '@widgets/tables'

const CoursesPage = () => {
	return (
		<Layout>
			<Heading title='Список курсов' />
			<CoursesTable />
		</Layout>
	)
}

export default CoursesPage
