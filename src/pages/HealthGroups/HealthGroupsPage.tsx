import WithPageLayout from '@/shared/hoc/WithPageLayout'
import HealthGroupComponent from '@/modules/health-groups/components/HealthGroupComponent.tsx'

const HealthGroupsPage = () => {
	return <HealthGroupComponent />
}

export default WithPageLayout(HealthGroupsPage)
