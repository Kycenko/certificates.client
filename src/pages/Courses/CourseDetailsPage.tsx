import CourseDetailsTable from '@/components/tables/Courses/CourseDetailsTable.tsx'

import WithPageLayout from '@/app/hoc/WithPageLayout'

const CourseDetailsPage = () => {
	return <CourseDetailsTable />
}

export default WithPageLayout(CourseDetailsPage)
