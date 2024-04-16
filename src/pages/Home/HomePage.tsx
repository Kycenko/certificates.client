import { useState } from 'react'
import * as XLSX from 'xlsx'

import Layout from '@/components/Layout/Layout'

import { useUploadStudents } from '@/queries/student.queries'

const HomePage = () => {
	const [file, setFile] = useState<File | null>(null)
	const [data, setData] = useState<any[]>([])
	const { create, isPending } = useUploadStudents()
	const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = event.target.files?.[0]
		if (selectedFile) {
			setFile(selectedFile)
			const reader = new FileReader()
			reader.onload = () => {
				const binaryString = reader.result as string
				const workbook = XLSX.read(binaryString, { type: 'binary' })
				const sheetName = workbook.SheetNames[0]
				const worksheet = workbook.Sheets[sheetName]
				const jsonData = XLSX.utils.sheet_to_json(worksheet, {
					raw: false,
					dateNF: 'dd.mm.yyyy'
				})
				setData(jsonData)
			}
			reader.readAsBinaryString(selectedFile)
		}
	}
	const handleUploadToDatabase = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!file) {
			return
		}
		const formData = new FormData()
		formData.append('file', file)
		await create(formData as any)

		setFile(null)
	}

	const DataTable = () => {
		return (
			<table>
				<thead>
					<tr>
						{Object.keys(data[0]).map(key => (
							<th key={key}>{key}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((row, index) => (
						<tr key={index}>
							{Object.values(row).map((value, index) => (
								<td key={index}>{value}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		)
	}

	return (
		<Layout>
			<div>
				<h3>Импорт данных</h3>

				<input
					type='file'
					required
					onChange={handleFileUpload}
				/>
				<button
					type='submit'
					onClick={handleUploadToDatabase}
					disabled={isPending}
				>
					ЗАГРУЗИТЬ
				</button>

				{data.length > 0 && <DataTable />}
			</div>
		</Layout>
	)
}

export default HomePage
