import { Layout } from '@app/layout'
import { Heading } from '@shared/ui'
import { GroupsTable } from '@widgets/tables'

const GroupsPage = () => {
	return (
		<Layout>
			<Heading title='Список групп' />
			<GroupsTable />
		</Layout>
	)
}

export default GroupsPage
