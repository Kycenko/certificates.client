import { AuthService, ILogin, IRegister } from '.'
import { SERVICE_URL, authToast, createToast } from '@shared/config'
import { useAuth } from '@shared/hooks'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
	const navigate = useNavigate()
	const { setUser } = useAuth()
	const { mutateAsync } = useMutation({
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
	return { mutateAsync }
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
