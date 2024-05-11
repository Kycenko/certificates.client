import WithPageLayout from '@/app/Layout/hoc/WithPageLayout'
import HealthGroupReport from '@/modules/reports/components/HealthGroupReport/HealthGroupReport'

const GetHealthGroupReportPage = () => {
	return <HealthGroupReport />
}

export default WithPageLayout(GetHealthGroupReportPage)
