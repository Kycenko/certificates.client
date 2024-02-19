import store, { RootState } from '@app/providers/StoreProvider/store'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
