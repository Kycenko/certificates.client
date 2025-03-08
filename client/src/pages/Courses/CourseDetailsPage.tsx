import WithPageLayout from '@/components/Layout/hoc/WithPageLayout'

import CourseDetailsTable from '@/modules/courses/components/CourseDetailsTable.tsx'

const CourseDetailsPage = () => {
	return <CourseDetailsTable />
}

export default WithPageLayout(CourseDetailsPage)
