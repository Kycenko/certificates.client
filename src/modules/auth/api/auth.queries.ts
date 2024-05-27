import {useMutation} from '@tanstack/react-query'

import {AuthService} from '@/modules/auth/api/auth.service.ts'
import {ILogin, IRegister} from '@/modules/auth/types/auth.types.ts'
import {authToast, createToast} from '@/shared/helpers/toasts.ts'
import useAuth from '@/shared/hooks/useAuth.ts'

export const useLogin = () => {
	const { setUser } = useAuth()
	const { mutateAsync } = useMutation({
		mutationKey: ['login'],
		mutationFn: (data: ILogin) => AuthService.login(data),
		onSuccess: ({ data }) => {
			if (data) {
				setUser(data.user)
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
