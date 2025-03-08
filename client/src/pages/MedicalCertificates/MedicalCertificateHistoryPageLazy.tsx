import { lazy } from 'react'

export const MedicalCertificateHistoryPageLazy = lazy(
	() => import('./MedicalCertificateHistoryPage')
)
