import WithPageLayout from '@/components/Layout/hoc/WithPageLayout'

import UserComponent from '@/modules/users/components/UserComponent.tsx'

const UsersPage = () => {
	return <UserComponent />
}

export default WithPageLayout(UsersPage)
