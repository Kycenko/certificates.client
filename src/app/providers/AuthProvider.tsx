import {
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useEffect,
	useState
} from 'react'
import { useNavigate } from 'react-router-dom'

import { LOCAL_STORAGE_KEY } from '@/constants/enums'

import { IUser } from '@/types/user.types'

import { getAccessToken, removeFromStorage } from '@/lib/helpers/auth.helper.ts'
import getLocalStorage from '@/lib/utils/getLocalStorage'

interface IAuthContext {
	user: IUser | null
	//setUser: ActionCreatorWithPayload<IUser | null, 'user/setUser'>
	setUser: Dispatch<SetStateAction<IUser | null>>
}

export const AuthContext = createContext<IAuthContext | null>(null)

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const navigate = useNavigate()
	//const dispatch = useAppDispatch()
	//const user = useSelector((state: RootState) => state.user.user)
	const [user, setUser] = useState<IUser | null>(null)

	useEffect(() => {
		const initializeAuth = () => {
			const storedUser = getLocalStorage(LOCAL_STORAGE_KEY.USER)
			const accessToken = getAccessToken()

			if (!accessToken) {
				removeFromStorage()
				navigate('/login', { replace: true })
				navigate(0)
				return
			}

			if (storedUser && (!user || storedUser.id !== user.id))
				setUser(storedUser)
		}

		initializeAuth()
	}, [user])

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}
export default AuthProvider
