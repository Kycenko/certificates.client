import MedicalCertificatesTable from '@/components/tables/MedicalCertificates/MedicalCertificatesTable.tsx'
import Heading from '@/components/ui/fields/Heading/Heading'

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
