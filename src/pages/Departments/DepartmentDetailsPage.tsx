import WithPageLayout from '@/app/Layout/hoc/WithPageLayout'
import DepartmentDetailsTable from '@/modules/departments/components/DepartmentDetailsTable.tsx'

const DepartmentDetailsPage = () => {
	return <DepartmentDetailsTable />
}

export default WithPageLayout(DepartmentDetailsPage)
