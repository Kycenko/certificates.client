import { ComponentType, PropsWithChildren } from 'react'

import Layout from '@/components/Layout/Layout.tsx'

const WithPageLayout = <P,>(WrappedComponent: ComponentType<P>) => {
	return (props: PropsWithChildren<P>) => (
		<Layout>
			<WrappedComponent {...props} />
		</Layout>
	)
}

export default WithPageLayout
