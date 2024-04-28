import StudentDetailsTable from '@/modules/students/components/StudentDetailsTable.tsx'

import WithPageLayout from '@/app/hoc/WithPageLayout'

const StudentDetailsPage = () => {
	return <StudentDetailsTable />
}

export default WithPageLayout(StudentDetailsPage)
