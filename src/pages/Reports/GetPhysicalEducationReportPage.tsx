import WithPageLayout from '@/components/Layout/hoc/WithPageLayout'

import PhysicalEducationReport from '@/modules/reports/components/PhysicalEducationReport/PhysicalEducationReport'

const GetPhysicalEducationReportPage = () => {
	return <PhysicalEducationReport />
}

export default WithPageLayout(GetPhysicalEducationReportPage)
