import { PencilLine, Trash2 } from 'lucide-react'
import { FC, memo } from 'react'

import CustomButton from '@/shared/ui/buttons/CustomButton.tsx'
import CustomModalForm from '@/shared/ui/forms/CustomModalForm/CustomModalForm.tsx'

import { IUser } from '@/modules/users/types/user.types.ts'

import styles from '@/app/styles/Cards.module.scss'
import useAuth from '@/modules/auth/hooks/useAuth.ts'
import useModal from '@/shared/hooks/useModal.ts'

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
							<CustomButton
								className={styles.iconBtn}
								onClick={() => onEdit(id)}
							>
								<PencilLine />
							</CustomButton>

							<CustomButton
								className={styles.iconBtn}
								onClick={() => setDeleteId(id)}
							>
								<Trash2 />
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

export default memo(UserData)
