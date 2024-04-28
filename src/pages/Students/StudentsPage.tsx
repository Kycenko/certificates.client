import WithPageLayout from '@/shared/hoc/WithPageLayout'
import StudentsTable from '@/modules/students/components/StudentsTable.tsx'
import Heading from '@/shared/ui/fields/Heading/Heading'

const StudentsPage = () => {
	return (
		<>
			<Heading title='Список учащихся' />
			<StudentsTable />
		</>
	)
}

export default WithPageLayout(StudentsPage)
