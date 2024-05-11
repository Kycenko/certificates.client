import WithPageLayout from '@/app/Layout/hoc/WithPageLayout'
import StudentHistory from '@/modules/students/components/StudentHistory/StudentHistory'

const StudentHistoryPage = () => {
	return <StudentHistory />
}

export default WithPageLayout(StudentHistoryPage)
