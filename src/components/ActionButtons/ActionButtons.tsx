import { Eye, History, PencilLine, Trash2 } from 'lucide-react'
import { FC } from 'react'

import styles from './ActionButtons.module.scss'

interface ActionButtonsProps {
	onHistory?: (id: number | string) => void
	onEdit: (id: number | string) => void
	onDelete: (id: number | string) => void
	onInfo?: (id: number | string) => void
	actionId: number | string
}

const ActionButtons: FC<ActionButtonsProps> = ({
	onHistory,
	onDelete,
	onEdit,
	onInfo,
	actionId
}) => {
	return (
		<>
			{!onHistory ? null : (
				<div
					className='tooltip '
					data-tip='История изменений'
				>
					<button
						className={styles.iconBtn}
						onClick={() => onHistory(actionId)}
					>
						<History />
					</button>
				</div>
			)}
			<div
				className='tooltip '
				data-tip='Изменить'
			>
				<button
					className={styles.iconBtn}
					onClick={() => onEdit(actionId)}
				>
					<PencilLine />
				</button>
			</div>

			{!onInfo ? null : (
				<div
					className='tooltip '
					data-tip='Подробнее'
				>
					<button
						className={styles.iconBtn}
						onClick={() => onInfo(actionId)}
					>
						<Eye />
					</button>
				</div>
			)}
			<div
				className='tooltip '
				data-tip='Удалить'
			>
				{' '}
				<button
					className={styles.iconBtn}
					onClick={() => onDelete(actionId)}
				>
					<Trash2 />
				</button>
			</div>
		</>
	)
}

export default ActionButtons
