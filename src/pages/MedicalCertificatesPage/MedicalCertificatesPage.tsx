import { Layout } from '@app/layout'
import { Heading } from '@shared/ui'
import { MedicalCertificatesTable } from '@widgets/tables'

const MedicalCertificatesPage = () => {
	return (
		<Layout>
			<Heading title='Список медицинских справок' />
			<MedicalCertificatesTable />
		</Layout>
	)
}

export default MedicalCertificatesPage
