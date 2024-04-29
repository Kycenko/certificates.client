import StudentHistory from '@/modules/students/components/StudentHistory/StudentHistory'
import WithPageLayout from '@/shared/hoc/WithPageLayout'

const StudentHistoryPage = () => {
	return <StudentHistory />
}

export default WithPageLayout(StudentHistoryPage)
