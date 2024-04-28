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

import { IUser } from '@/modules/users/types/user.types.ts'

import { LOCAL_STORAGE_KEY, PAGES_URL } from '@/shared/constants/enums'
import { getAccessToken, removeFromStorage } from '@/modules/auth/helpers/auth.helper.ts'
import getLocalStorage from '@/shared/utils/getLocalStorage'

interface IAuthContext {
	user: IUser | null

	setUser: Dispatch<SetStateAction<IUser | null>>
}

export const AuthContext = createContext<IAuthContext | null>(null)

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const navigate = useNavigate()

	const [user, setUser] = useState<IUser | null>(null)

	useEffect(() => {
		const initializeAuth = () => {
			const storedUser = getLocalStorage(LOCAL_STORAGE_KEY.USER)
			const accessToken = getAccessToken()

			if (!accessToken) {
				removeFromStorage()

				navigate(`${PAGES_URL.LOGIN}`, { replace: true })
				return
			}

			if (storedUser && (!user || storedUser.id !== user.id)) {
				setUser(storedUser)
			}
		}

		initializeAuth()
	}, [navigate, user])

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}
export default AuthProvider
