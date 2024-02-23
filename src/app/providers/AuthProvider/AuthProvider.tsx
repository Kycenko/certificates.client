import { IUser } from '@entities/User'
import { getAccessToken, removeFromStorage } from '@shared/auth'
import { LOCAL_STORAGE_KEY } from '@shared/config'
import { getLocalStorage } from '@shared/utils'
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
