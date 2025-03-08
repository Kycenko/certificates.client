import WithPageLayout from '@/components/Layout/hoc/WithPageLayout'

import MedicalCertificatesTable from '@/modules/medical-certificates/components/MedicalCertificatesTable.tsx'
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
