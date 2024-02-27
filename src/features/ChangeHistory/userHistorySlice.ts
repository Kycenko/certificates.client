import { TypeStudentForm } from '@entities/Student'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface StudentHistoryItem {
	id: string | number
	oldData: TypeStudentForm
	newData: TypeStudentForm
}

interface StudentHistoryState {
	history: Record<string | number, StudentHistoryItem>
}

const initialState: StudentHistoryState = {
	history: {}
}

const userHistorySlice = createSlice({
	name: 'userHistory',
	initialState,
	reducers: {
		setStudentHistory: (state, action: PayloadAction<StudentHistoryItem>) => {
			const { id, oldData, newData } = action.payload
			state.history[id] = { id, oldData, newData }
		}
	}
})

export const { setStudentHistory } = userHistorySlice.actions

export const selectStudentHistory = (
	state: { history: StudentHistoryState },
	studentId: string | number
) => state.history.history[studentId]

export default userHistorySlice.reducer
