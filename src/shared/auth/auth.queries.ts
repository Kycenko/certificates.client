import { AuthService } from '.'
import { SERVICE_URL } from '@shared/config/enums'
import { authToast, createToast } from '@shared/config/toasts'
import { useAuth } from '@shared/hooks'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import { ILogin, IRegister } from './auth.types'

export const useLogin = () => {
	const navigate = useNavigate()
	const { setUser } = useAuth()
	const { mutate } = useMutation({
		mutationKey: ['login'],
		mutationFn: (data: ILogin) => AuthService.login(data),
		onSuccess: data => {
			if (data) {
				setUser(data.user)
				navigate(`${SERVICE_URL.HOME}`, { replace: true })
				authToast()
			}
		}
	})
	return { mutate }
}

export const useRegister = () => {
	return useMutation({
		mutationKey: ['register'],
		mutationFn: (data: IRegister) => AuthService.register(data),
		onSuccess() {
			createToast()
		}
	})
}
