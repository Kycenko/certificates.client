import GroupsTable from '@/modules/groups/components/GroupsTable.tsx'
import Heading from '@/shared/ui/fields/Heading/Heading'

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
