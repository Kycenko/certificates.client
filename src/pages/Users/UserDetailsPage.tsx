import WithPageLayout from '@/app/Layout/hoc/WithPageLayout'
import UserDetailsComponent from '@/modules/users/components/UserDetailsComponent.tsx'

const UserDetailsPage = () => {
	return <UserDetailsComponent />
}

export default WithPageLayout(UserDetailsPage)
