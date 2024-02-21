import { Layout } from '@app/layout'
import { useGetProfile } from '@entities/User/user.queries'

const ProfilePage = () => {
	const { profile } = useGetProfile()
	console.log(profile)
	return <Layout>{profile?.login}</Layout>
}

export default ProfilePage
