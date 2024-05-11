import WithPageLayout from '@/app/Layout/hoc/WithPageLayout'
import GroupDetailsTable from '@/modules/groups/components/GroupDetailsTable.tsx'

const GroupDetailsPage = () => {
	return <GroupDetailsTable />
}

export default WithPageLayout(GroupDetailsPage)
