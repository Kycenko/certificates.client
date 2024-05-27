import {lazy} from 'react'

export const DepartmentDetailsPageLazy = lazy(
	() => import('./DepartmentDetailsPage')
)
