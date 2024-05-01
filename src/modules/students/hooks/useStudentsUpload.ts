import { ChangeEvent, useState } from 'react'
import * as XLSX from 'xlsx'

import { IUploadStudent } from '@/modules/students/types/student.types.ts'

const useStudentsUpload = () => {
	const [file, setFile] = useState<File | null>(null)
	const [data, setData] = useState<IUploadStudent[] | undefined>(undefined)

	const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
		const selectedFile = event.target.files?.[0]
		if (selectedFile) {
			setFile(selectedFile)
			const reader = new FileReader()
			reader.onload = () => {
				const binaryString = reader.result
				const workbook = XLSX.read(binaryString, { type: 'binary' })
				const sheetName = workbook.SheetNames[0]
				const worksheet = workbook.Sheets[sheetName]
				const jsonData = XLSX.utils.sheet_to_json(worksheet, {
					raw: false
				})
				setData(jsonData as IUploadStudent[])
				console.log(jsonData)
			}
			reader.readAsBinaryString(selectedFile)
		}
	}

	return {
		file,
		data,
		setFile,
		setData,
		handleFileUpload
	}
}

export default useStudentsUpload
