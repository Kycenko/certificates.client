import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import { AuthService } from '@/modules/auth/api/auth.service.ts'
import { ILogin, IRegister } from '@/modules/auth/types/auth.types.ts'
import { SERVICE_URL } from '@/shared/constants/enums.ts'
import { authToast, createToast } from '@/shared/helpers/toasts.ts'
import useAuth from '@/shared/hooks/useAuth.ts'

export const useLogin = () => {
	const navigate = useNavigate()
	const { setUser } = useAuth()
	const { mutateAsync } = useMutation({
		mutationKey: ['login'],
		mutationFn: (data: ILogin) => AuthService.login(data),
		onSuccess: ({ data }) => {
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
