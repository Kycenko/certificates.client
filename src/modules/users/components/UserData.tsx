import { FC, memo } from 'react'

import ActionButtons from '@/components/ActionButtons.tsx'

import styles from '@/app/styles/Cards.module.scss'
import { IUser } from '@/modules/users/types/user.types.ts'
import useAuth from '@/shared/hooks/useAuth.ts'
import useModal from '@/shared/hooks/useModal.ts'
import CustomModalForm from '@/shared/ui/forms/CustomModalForm/CustomModalForm.tsx'

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
							<ActionButtons
								actionId={id}
								onEdit={() => onEdit(id)}
								onDelete={() => setDeleteId(id)}
							/>
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

export default memo(UserData)
