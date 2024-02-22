import { Layout } from '@app/layout'
import { useGetProfile } from '@entities/User/user.queries'
import { useParams } from 'react-router-dom'

const ProfilePage = () => {
	const { id } = useParams()
	const { profile } = useGetProfile(id)
	console.log(profile)
	return <Layout>{profile?.login}</Layout>
}

export default ProfilePage
