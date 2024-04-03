import Layout from '@/components/Layout/Layout'
import GroupsTable from '@/components/tables/GroupsTable'
import Heading from '@/components/ui/fields/Heading'

const GroupsPage = () => {
	return (
		<Layout>
			<Heading title='Список групп' />
			<GroupsTable />
		</Layout>
	)
}

export default GroupsPage
