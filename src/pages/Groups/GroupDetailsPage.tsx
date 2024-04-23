import GroupDetailsTable from '@/components/tables/Groups/GroupDetailsTable.tsx'

import WithPageLayout from '@/app/hoc/WithPageLayout'

const GroupDetailsPage = () => {
	return <GroupDetailsTable />
}

export default WithPageLayout(GroupDetailsPage)
