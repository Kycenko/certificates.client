import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface SortState {
	sortOrder: 'asc' | 'desc'
}

const initialState: SortState = {
	sortOrder: 'asc'
}

const sortSlice = createSlice({
	name: 'sort',
	initialState,
	reducers: {
		setSortOrder: (state, action: PayloadAction<'asc' | 'desc'>) => {
			state.sortOrder = action.payload
		}
	}
})

export const { setSortOrder } = sortSlice.actions
export const selectSortOrder = (state: { sort: SortState }) =>
	state.sort.sortOrder

export default sortSlice.reducer
