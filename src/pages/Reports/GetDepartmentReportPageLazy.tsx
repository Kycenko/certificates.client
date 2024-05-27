import {lazy} from 'react'

export const GetDepartmentReportPageLazy = lazy(
	() => import('./GetDepartmentReportPage')
)
