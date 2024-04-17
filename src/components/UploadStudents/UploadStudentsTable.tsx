import useStudentsUpload from '@/hooks/useStudentsUpload'

import Layout from '../Layout/Layout'
import Heading from '../ui/fields/Heading'

import UploadStudentsData from './UploadStudentsData'
import styles from '@/app/styles/Tables.module.scss'
import { useUploadStudents } from '@/queries/student.queries'

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
						{/* <TableHeads data={UploadStudentsHeads} /> */}
						<tr className=''>
							<th className='p-2 uppercase font-bold'>Фамилия</th>
							<th className='p-2 uppercase font-bold'>Имя</th>
							<th className='p-2 uppercase font-bold'>Отчество</th>
							<th className='p-2 uppercase font-bold'>Дата рождения</th>
						</tr>
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
