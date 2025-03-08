import WithPageLayout from '@/components/Layout/hoc/WithPageLayout'

import StudentDetailsTable from '@/modules/students/components/StudentDetailsTable.tsx'

const StudentDetailsPage = () => {
	return <StudentDetailsTable />
}

export default WithPageLayout(StudentDetailsPage)
