import UserDetailsComponent from '@/modules/users/components/UserDetailsComponent/UserDetailsComponent.tsx'
import WithPageLayout from '@/shared/hoc/WithPageLayout'

const UserDetailsPage = () => {
	return <UserDetailsComponent />
}

export default WithPageLayout(UserDetailsPage)
