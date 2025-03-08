import WithPageLayout from '@/components/Layout/hoc/WithPageLayout'

import UserDetailsComponent from '@/modules/users/components/UserDetailsComponent/UserDetailsComponent.tsx'

const UserDetailsPage = () => {
	return <UserDetailsComponent />
}

export default WithPageLayout(UserDetailsPage)
