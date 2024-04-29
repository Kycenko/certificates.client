import HealthGroupComponent from '@/modules/health-groups/components/HealthGroupComponent.tsx'
import WithPageLayout from '@/shared/hoc/WithPageLayout'

const HealthGroupsPage = () => {
	return <HealthGroupComponent />
}

export default WithPageLayout(HealthGroupsPage)
