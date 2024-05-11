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
import {
	getAccessToken,
	removeFromStorage
} from '@/shared/helpers/auth.helper.ts'
import getLocalStorage from '@/shared/utils/getLocalStorage'

interface IAuthContext {
	user: IUser | null

	setUser: Dispatch<SetStateAction<IUser | null>>
}

export const AuthContext = createContext<IAuthContext | null>(null)

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const navigate = useNavigate()

	const [user, setUser] = useState<IUser | null>(null)
	const [, setAccessToken] = useState<string | null>(null)

	useEffect(() => {
		const storedUser = getLocalStorage(LOCAL_STORAGE_KEY.USER)

		if (storedUser && (!user || storedUser.id !== user.id)) {
			setUser(storedUser)
		}
	}, [user])

	useEffect(() => {
		const initializeAuth = async () => {
			const accessToken = await getAccessToken()

			if (!accessToken) {
				removeFromStorage()
				navigate(`${PAGES_URL.LOGIN}`, { replace: true })
				return
			}

			setAccessToken(accessToken)
		}

		initializeAuth()
	}, [navigate])

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}
export default AuthProvider
