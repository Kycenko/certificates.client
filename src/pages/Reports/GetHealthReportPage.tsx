import WithPageLayout from '@/shared/hoc/WithPageLayout'
import HealthReport from '@/modules/reports/components/CheckListReport/HealthReport'

const GetHealthReportPage = () => {
	return <HealthReport />
}

export default WithPageLayout(GetHealthReportPage)
