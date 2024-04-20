import { UploadStudentsHeads } from '@/components/tables/Students/UploadStudents/upload-students-heads.ts'
import TableHeads from '@/components/tables/tablesHeads/TableHeads.tsx'

import Layout from '../../../Layout/Layout.tsx'
import Heading from '../../../ui/fields/Heading/Heading.tsx'

import UploadStudentsData from './UploadStudentsData.tsx'
import styles from '@/app/styles/Tables.module.scss'
import useStudentsUpload from '@/lib/hooks/useStudentsUpload.ts'
import { useUploadStudents } from '@/queries/student.queries.ts'

const UploadStudentsTable = () => {
	const { file, setFile, data, setData, handleFileUpload } = useStudentsUpload()
	const { create, isPending } = useUploadStudents()

	const handleUploadToDatabase = async () => {
		if (!file) return

		const formData = new FormData()
		formData.append('file', file)
		await create(formData as any)

		setFile(null)
		setData([])
	}

	return (
		<Layout>
			<Heading title='Импорт данных' />

			<div className='flex flex-col '>
				<div className='flex justify-center mb-4'>
					<input
						type='file'
						required
						accept='.xlsx, .csv'
						onChange={handleFileUpload}
					/>
				</div>

				<div className='flex justify-center'>
					<button
						className={`${isPending || !data?.length ? 'p-2 bg-emerald-300  text-white rounded-md mb-4' : 'p-2 bg-emerald-500 text-white rounded-md mb-4'}`}
						type='submit'
						onClick={handleUploadToDatabase}
						disabled={isPending || !data?.length}
					>
						ЗАГРУЗИТЬ
					</button>
				</div>
			</div>

			{data && (
				<table className={styles.table}>
					<thead className={'border-b-2 border-t-2 m-4'}>
						<TableHeads data={UploadStudentsHeads} />
					</thead>
					<tbody className='text-center'>
						<UploadStudentsData data={data} />
					</tbody>
				</table>
			)}
		</Layout>
	)
}

export default UploadStudentsTable
