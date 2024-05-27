import WithPageLayout from '@/components/Layout/hoc/WithPageLayout'
import UploadStudentsTable from '@/modules/students/components/UploadStudents/UploadStudentsTable'

const HomePage = () => {
	return <UploadStudentsTable />
}

export default WithPageLayout(HomePage)
