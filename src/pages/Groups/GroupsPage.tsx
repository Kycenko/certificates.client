import WithPageLayout from '@/shared/hoc/WithPageLayout'
import GroupsTable from '@/modules/groups/components/GroupsTable.tsx'
import Heading from '@/shared/ui/fields/Heading/Heading'

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
