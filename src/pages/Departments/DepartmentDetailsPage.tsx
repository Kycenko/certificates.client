import DepartmentDetailsTable from '@/modules/departments/components/DepartmentDetailsTable.tsx'

import WithPageLayout from '@/app/hoc/WithPageLayout'

const DepartmentDetailsPage = () => {
	return <DepartmentDetailsTable />
}

export default WithPageLayout(DepartmentDetailsPage)
