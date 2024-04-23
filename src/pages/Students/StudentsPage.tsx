import StudentsTable from '@/components/tables/Students/StudentsTable.tsx'
import Heading from '@/components/ui/fields/Heading/Heading'

import WithPageLayout from '@/app/hoc/WithPageLayout'

const StudentsPage = () => {
	return (
		<>
			<Heading title='Список учащихся' />
			<StudentsTable />
		</>
	)
}

export default WithPageLayout(StudentsPage)
