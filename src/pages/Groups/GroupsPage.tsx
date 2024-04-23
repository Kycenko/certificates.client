import GroupsTable from '@/components/tables/Groups/GroupsTable.tsx'
import Heading from '@/components/ui/fields/Heading/Heading'

import WithPageLayout from '@/app/hoc/WithPageLayout'

const GroupsPage = () => {
	return (
		<>
			{' '}
			<Heading title='Список групп' />
			<GroupsTable />
		</>
	)
}

export default WithPageLayout(GroupsPage)
