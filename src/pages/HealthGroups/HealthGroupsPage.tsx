import HealthGroupComponent from '@/components/tables/HealthGroups/HealthGroupComponent.tsx'

import WithPageLayout from '@/app/hoc/WithPageLayout'

const HealthGroupsPage = () => {
	return <HealthGroupComponent />
}

export default WithPageLayout(HealthGroupsPage)
