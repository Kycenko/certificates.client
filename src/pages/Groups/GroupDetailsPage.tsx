import GroupDetailsTable from '@/modules/groups/components/GroupDetailsTable.tsx'
import WithPageLayout from '@/shared/hoc/WithPageLayout'

const GroupDetailsPage = () => {
	return <GroupDetailsTable />
}

export default WithPageLayout(GroupDetailsPage)
