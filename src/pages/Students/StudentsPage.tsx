import StudentsTable from '@/modules/students/components/StudentsTable.tsx'
import WithPageLayout from '@/shared/hoc/WithPageLayout'
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
