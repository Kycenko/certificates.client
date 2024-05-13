import { memo } from 'react'

import TableHeads from '@/components/tablesHeads/TableHeads.tsx'

import UploadStudentsData from './UploadStudentsData.tsx'
import styles from '@/app/styles/Tables.module.scss'
import { useUploadStudents } from '@/modules/students/api/student.queries.ts'
import { UploadStudentsHeads } from '@/modules/students/components/UploadStudents/upload-students-heads.ts'
import useStudentsUpload from '@/modules/students/hooks/useStudentsUpload.ts'
import Heading from '@/shared/ui/fields/Heading/Heading.tsx'

const UploadStudentsTable = () => {
	const { file, setFile, data, setData, handleFileUpload } = useStudentsUpload()
	const { create, isPending } = useUploadStudents()

	const handleUpload = async () => {
		if (!file) return

		const formData = new FormData()
		formData.append('file', file)

		await create(formData as any)

		setFile(null)
		setData([])
	}

	return (
		<>
			<Heading title='Импорт данных' />
			<div className='flex flex-col'>
				<div className='flex justify-center mb-4'>
					<input
						type='file'
						required
						accept='.xlsx, .csv, .xls'
						onChange={handleFileUpload}
						className='file-input file-input-bordered w-full max-w-[321px]'
					/>
				</div>

				<div className='flex justify-center'>
					<button
						className='btn btn-success text-white mb-4'
						type='submit'
						onClick={handleUpload}
						disabled={isPending || !data?.length}
					>
						ЗАГРУЗИТЬ
					</button>
				</div>
			</div>

			{data && (
				<table className={styles.table}>
					<thead className={styles.tHeads}>
						<TableHeads
							className={styles.dHead}
							data={UploadStudentsHeads}
						/>
					</thead>
					<tbody className='text-center'>
						<UploadStudentsData data={data} />
					</tbody>
				</table>
			)}
		</>
	)
}

export default memo(UploadStudentsTable)
