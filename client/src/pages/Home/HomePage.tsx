import WithPageLayout from '@/components/Layout/hoc/WithPageLayout'

import UploadStudentsTable from '@/modules/students/components/UploadStudents/UploadStudentsTable'
import useAuth from '@/shared/hooks/useAuth'

const HomePage = () => {
	const { user } = useAuth()
	return <>{user ? <UploadStudentsTable /> : <></>}</>
}

export default WithPageLayout(HomePage)
