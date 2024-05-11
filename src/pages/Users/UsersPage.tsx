import WithPageLayout from '@/app/Layout/hoc/WithPageLayout'
import UserComponent from '@/modules/users/components/UserComponent.tsx'

const UsersPage = () => {
	return <UserComponent />
}

export default WithPageLayout(UsersPage)
