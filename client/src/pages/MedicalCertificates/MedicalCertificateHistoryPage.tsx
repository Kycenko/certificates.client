import WithPageLayout from '@/components/Layout/hoc/WithPageLayout'

import MedicalCertificateHistory from '@/modules/medical-certificates/components/MedicalCertificateHistory.tsx'

const MedicalCertificateHistoryPage = () => {
	return <MedicalCertificateHistory />
}
export default WithPageLayout(MedicalCertificateHistoryPage)
