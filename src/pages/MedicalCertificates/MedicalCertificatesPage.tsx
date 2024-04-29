import MedicalCertificatesTable from '@/modules/medical-certificates/components/MedicalCertificatesTable.tsx'
import WithPageLayout from '@/shared/hoc/WithPageLayout'
import Heading from '@/shared/ui/fields/Heading/Heading'

const MedicalCertificatesPage = () => {
	return (
		<>
			<Heading title='Список медицинских справок' />
			<MedicalCertificatesTable />
		</>
	)
}

export default WithPageLayout(MedicalCertificatesPage)
