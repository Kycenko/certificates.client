import { LOCAL_STORAGE_KEY } from '@/constants/enums.ts'

import { TypeStudentForm } from '@/types/student.types.ts'

interface StudentHistoryProps {
	id: string
	studentId: number | string
	name: string
	groupId: number | undefined
	surname: string
	secondName: string
	birthDate: Date
	updatedAt: Date
}

interface StudentHistory {
	[studentId: string]: StudentHistoryProps[]
}

const getHistoryFromStorage = (): StudentHistory => {
	return JSON.parse(
		localStorage.getItem(`${LOCAL_STORAGE_KEY.STUDENT_HISTORY}`) || '{}'
	)
}

const saveHistoryToStorage = (history: StudentHistory) => {
	localStorage.setItem(
		`${LOCAL_STORAGE_KEY.STUDENT_HISTORY}`,
		JSON.stringify(history)
	)
}

export const saveStudentHistory = (
	studentId: number | string,
	newData: TypeStudentForm
) => {
	const history = getHistoryFromStorage()

	const newHistory: StudentHistoryProps = {
		id: new Date().getTime().toString(),
		studentId,
		...newData,
		groupId: Number(newData.groupId),
		updatedAt: new Date()
	}

	history[studentId] = [...(history[studentId] || []), newHistory]

	saveHistoryToStorage(history)
}

export const getStudentHistory = (
	studentId: string | undefined
): StudentHistoryProps[] => {
	const history = getHistoryFromStorage()
	if (studentId === undefined) return []

	return history[studentId] || []
}
