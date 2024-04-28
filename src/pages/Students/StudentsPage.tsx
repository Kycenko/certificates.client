import StudentsTable from '@/modules/students/components/StudentsTable.tsx'
import Heading from '@/shared/ui/fields/Heading/Heading'

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
