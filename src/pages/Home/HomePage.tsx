import UploadStudentsTable from '@/modules/students/components/UploadStudents/UploadStudentsTable'

import WithPageLayout from '@/app/hoc/WithPageLayout'

const HomePage = () => {
	return <UploadStudentsTable />
}

export default WithPageLayout(HomePage)
