import WithPageLayout from '@/components/Layout/hoc/WithPageLayout'

import ExpiredCertificatesReport from '@/modules/reports/components/ExpiredCertificatesReport/ExpiredCertificatesReport'

const GetExpiredCertificatesReportPage = () => {
	return <ExpiredCertificatesReport />
}

export default WithPageLayout(GetExpiredCertificatesReportPage)
