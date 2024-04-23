import CoursesTable from '@/components/tables/Courses/CoursesTable.tsx'
import Heading from '@/components/ui/fields/Heading/Heading'

import WithPageLayout from '@/app/hoc/WithPageLayout.tsx'

const CoursesPage = () => {
	return (
		<>
			<Heading title='Список курсов' />
			<CoursesTable />
		</>
	)
}

export default WithPageLayout(CoursesPage)
