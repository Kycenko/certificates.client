import { lazy } from 'react'

export const GetHealthReportPageLazy = lazy(
	() => import('./GetHealthReportPage')
)
