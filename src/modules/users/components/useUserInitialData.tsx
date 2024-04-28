import { useEffect } from 'react'
import { UseFormReset } from 'react-hook-form'

import { useGetUser } from '@/modules/users/queries/user.queries.ts'
import { TypeUserForm } from '@/modules/users/types/user.types.ts'

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
