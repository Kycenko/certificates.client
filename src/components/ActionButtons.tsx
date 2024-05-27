import {Eye, History, PencilLine, Trash2} from 'lucide-react'
import {FC} from 'react'

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
				<button
					className={styles.iconBtn}
					onClick={() => onHistory(actionId)}
				>
					<History />
				</button>
			)}

			<button
				className={styles.iconBtn}
				onClick={() => onEdit(actionId)}
			>
				<PencilLine />
			</button>

			{!onInfo ? null : (
				<button
					className={styles.iconBtn}
					onClick={() => onInfo(actionId)}
				>
					<Eye />
				</button>
			)}
			<button
				className={styles.iconBtn}
				onClick={() => onDelete(actionId)}
			>
				<Trash2 />
			</button>
		</>
	)
}

export default ActionButtons
