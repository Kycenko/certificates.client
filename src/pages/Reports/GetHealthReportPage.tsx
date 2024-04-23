import HealthReport from '@/components/reports/CheckListReport/HealthReport'

import WithPageLayout from '@/app/hoc/WithPageLayout'

const GetHealthReportPage = () => {
	return <HealthReport />
}

export default WithPageLayout(GetHealthReportPage)
