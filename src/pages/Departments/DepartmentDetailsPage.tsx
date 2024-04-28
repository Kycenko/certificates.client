import WithPageLayout from '@/shared/hoc/WithPageLayout'
import DepartmentDetailsTable from '@/modules/departments/components/DepartmentDetailsTable.tsx'

const DepartmentDetailsPage = () => {
	return <DepartmentDetailsTable />
}

export default WithPageLayout(DepartmentDetailsPage)
