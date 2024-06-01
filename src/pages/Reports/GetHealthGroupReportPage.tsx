import WithPageLayout from '@/components/Layout/hoc/WithPageLayout'

import HealthGroupReport from '@/modules/reports/components/HealthGroupReport/HealthGroupReport'

const GetHealthGroupReportPage = () => {
	return <HealthGroupReport />
}

export default WithPageLayout(GetHealthGroupReportPage)
