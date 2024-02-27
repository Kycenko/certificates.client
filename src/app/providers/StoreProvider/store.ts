import { userHistorySlice } from '@features/ChangeHistory'
import { searchSlice } from '@features/Search'
import { sortSlice } from '@features/SortOrder'
import { configureStore } from '@reduxjs/toolkit'

import { StateSchema } from './StateSchema'

const store = configureStore<StateSchema>({
	reducer: {
		search: searchSlice,
		sort: sortSlice,
		studentHistory: userHistorySlice
	},
	devTools: true
})

export type RootState = ReturnType<typeof store.getState>

export default store
