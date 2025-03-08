import WithPageLayout from '@/components/Layout/hoc/WithPageLayout'

import GroupReport from '@/modules/reports/components/GroupReport/GroupReport'

const GetGroupReportPage = () => {
	return <GroupReport />
}

export default WithPageLayout(GetGroupReportPage)
