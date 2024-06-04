import { FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import ErrorBoundary from '@/components/ErrorBoundary'

import { routeConfig } from '@/app/config/route.config'
import CustomLoader from '@/shared/ui/loader/CustomLoader'

const RouteProvider: FC = () => {
	return (
		<ErrorBoundary>
			<Suspense fallback={<CustomLoader />}>
				<Routes>
					{Object.values(routeConfig).map(({ element, path }) => (
						<Route
							key={path}
							element={element}
							path={path}
						/>
					))}
				</Routes>
			</Suspense>
		</ErrorBoundary>
	)
}

export default RouteProvider
