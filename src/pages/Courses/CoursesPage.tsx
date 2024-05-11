import WithPageLayout from '@/app/Layout/hoc/WithPageLayout.tsx'
import CoursesTable from '@/modules/courses/components/CoursesTable.tsx'
import Heading from '@/shared/ui/fields/Heading/Heading'

const CoursesPage = () => {
	return (
		<>
			<Heading title='Список курсов' />
			<CoursesTable />
		</>
	)
}

export default WithPageLayout(CoursesPage)
