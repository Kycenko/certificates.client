import WithPageLayout from '@/components/Layout/hoc/WithPageLayout'

import DepartmentReport from '@/modules/reports/components/DepartmentReport/DepartmentReport'

const GetDepartmentReportPage = () => {
	return <DepartmentReport />
}

export default WithPageLayout(GetDepartmentReportPage)
