import CourseDetailsTable from '@/modules/courses/components/CourseDetailsTable.tsx'

import WithPageLayout from '@/app/hoc/WithPageLayout'

const CourseDetailsPage = () => {
	return <CourseDetailsTable />
}

export default WithPageLayout(CourseDetailsPage)
