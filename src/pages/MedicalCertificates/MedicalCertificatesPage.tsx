import MedicalCertificatesTable from '@/modules/medical-certificates/components/MedicalCertificatesTable.tsx'
import Heading from '@/shared/ui/fields/Heading/Heading'

import WithPageLayout from '@/app/hoc/WithPageLayout'

const MedicalCertificatesPage = () => {
	return (
		<>
			<Heading title='Список медицинских справок' />
			<MedicalCertificatesTable />
		</>
	)
}

export default WithPageLayout(MedicalCertificatesPage)
