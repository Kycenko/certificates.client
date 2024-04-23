import UserComponent from '@/components/tables/Users/UserComponent.tsx'

import WithPageLayout from '@/app/hoc/WithPageLayout'

const UsersPage = () => {
	return <UserComponent />
}

export default WithPageLayout(UsersPage)
