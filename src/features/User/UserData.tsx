import { IUser } from '@entities/User/user.types'
import { useAuth } from '@shared/hooks'
import { CustomButton, CustomModalForm } from '@shared/ui'
import { FC, useState } from 'react'

interface UserDataProps {
	data: IUser[] | undefined
	onDelete: (id: string | number) => void
	onEdit: (id: string) => void
}

const UserData: FC<UserDataProps> = ({ data, onEdit, onDelete }) => {
	const [isOpen, setIsOpen] = useState<string | null>(null)
	const { user } = useAuth()
	return (
		<div>
			{data?.map(({ id, login }) => {
				if (user && user.id === id) {
					return null
				}

				return (
					<div key={id} className='mb-4 rounded bg-white p-4 shadow'>
						<h2 className='mb-2 text-xl font-bold'>{login}</h2>
						<div className='flex space-x-2'>
							<CustomButton onClick={() => onEdit(id)}>Изменить</CustomButton>
							<CustomButton onClick={() => setIsOpen(id)}>Удалить</CustomButton>
						</div>
						<CustomModalForm
							onSubmit={() => onDelete(id)}
							buttonTitle={'Удалить'}
							isOpen={isOpen === id}
							onClose={() => setIsOpen(null)}
							formTitle={'Удаление'}
						>
							<div className='flex flex-col'>{id}</div>
							<div className='flex flex-col'>{login}</div>
						</CustomModalForm>
					</div>
				)
			})}
		</div>
	)
}

export default UserData
