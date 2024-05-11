import WithPageLayout from '@/app/Layout/hoc/WithPageLayout'
import StudentDetailsTable from '@/modules/students/components/StudentDetailsTable.tsx'

const StudentDetailsPage = () => {
	return <StudentDetailsTable />
}

export default WithPageLayout(StudentDetailsPage)
