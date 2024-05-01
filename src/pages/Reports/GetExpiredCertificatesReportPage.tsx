import ExpiredCertificatesReport from '@/modules/reports/components/ExpiredCertificatesReport/ExpiredCertificatesReport'
import WithPageLayout from '@/shared/hoc/WithPageLayout'

const GetExpiredCertificatesReportPage = () => {
	return <ExpiredCertificatesReport />
}

export default WithPageLayout(GetExpiredCertificatesReportPage)
