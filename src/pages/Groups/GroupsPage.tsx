import Layout from '@/components/Layout/Layout'
import GroupsTable from '@/components/tables/Groups/GroupsTable.tsx'
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
