import UploadStudentsTable from '@/modules/students/components/UploadStudents/UploadStudentsTable'
import WithPageLayout from '@/shared/hoc/WithPageLayout'

const HomePage = () => {
	return <UploadStudentsTable />
}

export default WithPageLayout(HomePage)
