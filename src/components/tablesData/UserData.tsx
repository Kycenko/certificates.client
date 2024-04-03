import { FC } from 'react'

import CustomButton from '@/components/ui/buttons/CustomButton'
import CustomModalForm from '@/components/ui/forms/CustomModalForm/CustomModalForm'

import { IUser } from '@/types/user.types'

import useAuth from '@/hooks/useAuth'
import useModal from '@/hooks/useModal'

import styles from '@/app/styles/Cards.module.scss'

interface UserDataProps {
	data: IUser[] | undefined
	onDelete: (id: string | number) => void
	onEdit: (id: string) => void
}

const UserData: FC<UserDataProps> = ({ data, onEdit, onDelete }) => {
	const { deleteId, setDeleteId } = useModal()
	const { user } = useAuth()
	return (
		<div>
			{data?.map(({ id, login }) =>
				user && user.id === id ? null : (
					<div
						key={id}
						className={styles.container}
					>
						<h2 className={styles.title}>{login}</h2>
						<div className={styles.buttons}>
							<CustomButton onClick={() => onEdit(id)}>Изменить</CustomButton>
							<CustomButton onClick={() => setDeleteId(id)}>
								Удалить
							</CustomButton>
						</div>
						<CustomModalForm
							onSubmit={() => onDelete(id)}
							buttonTitle={'Удалить'}
							isOpen={deleteId === id}
							onClose={() => setDeleteId(null)}
							formTitle={'Удаление'}
						>
							<p>{id}</p>
							<p>{login}</p>
						</CustomModalForm>
					</div>
				)
			)}
		</div>
	)
}

export default UserData
