import { useGetUser } from '@entities/User/user.queries.ts'
import { TypeUserForm } from '@entities/User/user.types.ts'
import { useEffect } from 'react'
import { UseFormReset } from 'react-hook-form'

const useUserInitialData = (
	id: string | undefined,
	reset: UseFormReset<TypeUserForm>
) => {
	const { user, isSuccess } = useGetUser(id)

	useEffect(() => {
		if (isSuccess && user) {
			reset({
				login: user.login,
				isAdmin: user.isAdmin
			})
		}
	}, [isSuccess])
}

export default useUserInitialData
