import { FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { routeConfig } from '@/app/config/route.config'
import CustomLoader from '@/shared/ui/loader/CustomLoader'

const RouteProvider: FC = () => {
	return (
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
	)
}

export default RouteProvider
