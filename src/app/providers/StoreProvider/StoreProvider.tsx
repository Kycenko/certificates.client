import { store } from '.'
import { FC, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>
}

export default StoreProvider
