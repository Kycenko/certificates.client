import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import useAuth from '@/modules/auth/hooks/useAuth.ts'
import { AuthService } from '@/modules/auth/services/auth.service.ts'
import { ILogin, IRegister } from '@/modules/auth/types/auth.types.ts'
import { SERVICE_URL } from '@/shared/constants/enums.ts'
import { authToast, createToast } from '@/shared/constants/toasts.ts'

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
