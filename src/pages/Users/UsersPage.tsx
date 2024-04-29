import UserComponent from '@/modules/users/components/UserComponent.tsx'
import WithPageLayout from '@/shared/hoc/WithPageLayout'

const UsersPage = () => {
	return <UserComponent />
}

export default WithPageLayout(UsersPage)
