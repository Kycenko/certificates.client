import CoursesTable from '@/modules/courses/components/CoursesTable.tsx'
import Heading from '@/shared/ui/fields/Heading/Heading'

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
