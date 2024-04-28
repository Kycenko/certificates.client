import UserDetailsComponent from '@/modules/users/components/UserDetailsComponent/UserDetailsComponent.tsx'

import WithPageLayout from '@/app/hoc/WithPageLayout'

const UserDetailsPage = () => {
	return <UserDetailsComponent />
}

export default WithPageLayout(UserDetailsPage)
