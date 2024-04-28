import { ComponentType } from 'react'

import Layout from '@/shared/components/Layout/Layout.tsx'

const WithPageLayout = (WrappedComponent: ComponentType) => {
	return (props: any) => (
		<Layout>
			<WrappedComponent {...props} />
		</Layout>
	)
}

export default WithPageLayout
