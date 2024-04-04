import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import { SERVICE_URL } from '@/constants/enums'
import { authToast, createToast } from '@/constants/notification-toasts.ts'

import { ILogin, IRegister } from '@/types/auth.types'

import useAuth from '@/hooks/useAuth'

import { AuthService } from '@/services/auth.service'

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
