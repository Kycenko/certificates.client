import StudentDetailsTable from '@/modules/students/components/StudentDetailsTable.tsx'
import WithPageLayout from '@/shared/hoc/WithPageLayout'

const StudentDetailsPage = () => {
	return <StudentDetailsTable />
}

export default WithPageLayout(StudentDetailsPage)
