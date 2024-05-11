import WithPageLayout from '@/app/Layout/hoc/WithPageLayout'
import PhysicalEducationReport from '@/modules/reports/components/PhysicalEducationReport/PhysicalEducationReport'

const GetPhysicalEducationReportPage = () => {
	return <PhysicalEducationReport />
}

export default WithPageLayout(GetPhysicalEducationReportPage)
