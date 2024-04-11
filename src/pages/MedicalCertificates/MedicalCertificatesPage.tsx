import Layout from '@/components/Layout/Layout'
import MedicalCertificatesTable from '@/components/tables/MedicalCertificates/MedicalCertificatesTable.tsx'
import Heading from '@/components/ui/fields/Heading'

const MedicalCertificatesPage = () => {
	return (
		<Layout>
			<Heading title='Список медицинских справок' />
			<MedicalCertificatesTable />
		</Layout>
	)
}

export default MedicalCertificatesPage
