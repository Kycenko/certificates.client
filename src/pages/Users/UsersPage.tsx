import UserComponent from '@/modules/users/components/UserComponent.tsx'

import WithPageLayout from '@/app/hoc/WithPageLayout'

const UsersPage = () => {
	return <UserComponent />
}

export default WithPageLayout(UsersPage)
