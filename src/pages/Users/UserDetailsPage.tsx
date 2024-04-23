import UserDetailsComponent from '@/components/tables/Users/UserDetailsComponent/UserDetailsComponent.tsx'

import WithPageLayout from '@/app/hoc/WithPageLayout'

const UserDetailsPage = () => {
	return <UserDetailsComponent />
}

export default WithPageLayout(UserDetailsPage)
