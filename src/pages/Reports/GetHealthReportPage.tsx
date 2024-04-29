import HealthReport from '@/modules/reports/components/CheckListReport/HealthReport'
import WithPageLayout from '@/shared/hoc/WithPageLayout'

const GetHealthReportPage = () => {
	return <HealthReport />
}

export default WithPageLayout(GetHealthReportPage)
