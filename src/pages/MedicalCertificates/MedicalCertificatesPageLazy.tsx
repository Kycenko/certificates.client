import {lazy} from 'react'

export const MedicalCertificatesPageLazy = lazy(
	() => import('./MedicalCertificatesPage')
)
