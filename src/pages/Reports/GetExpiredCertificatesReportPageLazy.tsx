import {lazy} from 'react'

export const GetExpiredCertificatesReportPageLazy = lazy(
	() => import('./GetExpiredCertificatesReportPage')
)
