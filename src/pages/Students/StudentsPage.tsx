import WithPageLayout from '@/app/Layout/hoc/WithPageLayout'
import StudentsTable from '@/modules/students/components/StudentsTable.tsx'
import Heading from '@/shared/ui/fields/Heading/Heading'

const StudentsPage = () => {
	return (
		<>
			<Heading title='Список обучающихся' />
			<StudentsTable />
		</>
	)
}

export default WithPageLayout(StudentsPage)
