import WithPageLayout from '@/app/Layout/hoc/WithPageLayout'
import UploadStudentsTable from '@/modules/students/components/UploadStudents/UploadStudentsTable'

const HomePage = () => {
	return <UploadStudentsTable />
}

export default WithPageLayout(HomePage)
