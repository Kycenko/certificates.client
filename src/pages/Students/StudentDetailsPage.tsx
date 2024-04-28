import WithPageLayout from '@/shared/hoc/WithPageLayout'
import StudentDetailsTable from '@/modules/students/components/StudentDetailsTable.tsx'

const StudentDetailsPage = () => {
	return <StudentDetailsTable />
}

export default WithPageLayout(StudentDetailsPage)
