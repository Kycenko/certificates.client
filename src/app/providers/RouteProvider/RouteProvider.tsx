import Loader from '@shared/ui/loader/CustomLoader'
import { FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from './route.config'

const RouteProvider: FC = () => {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				{Object.values(routeConfig).map(({ element, path }) => (
					<Route key={path} element={element} path={path} />
				))}
			</Routes>
		</Suspense>
	)
}

export default RouteProvider
