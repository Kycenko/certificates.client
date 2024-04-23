import StudentDetailsTable from '@/components/tables/Students/StudentDetailsTable.tsx'

import WithPageLayout from '@/app/hoc/WithPageLayout'

const StudentDetailsPage = () => {
	return <StudentDetailsTable />
}

export default WithPageLayout(StudentDetailsPage)
