import { useEffect } from 'react'
import { UseFormReset } from 'react-hook-form'

import { TypeUserForm } from '@/types/user.types'

import { useGetUser } from '@/queries/user.queries'

const useUserInitialData = (
	id: string | undefined,
	reset: UseFormReset<TypeUserForm>
) => {
	const { user, isSuccess } = useGetUser(id)

	useEffect(() => {
		if (isSuccess && user) {
			reset({
				login: user.login,
				isAdmin: user.isAdmin,
				groupId: user.groupId
			})
		}
	}, [isSuccess])
}

export default useUserInitialData
