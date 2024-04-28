import { Eye, History, PencilLine, Trash2 } from 'lucide-react'
import { FC } from 'react'

import CustomButton from '../ui/buttons/CustomButton'

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
				<CustomButton
					// className={styles.iconBtn}
					onClick={() => onHistory(actionId)}
				>
					<History />
				</CustomButton>
			)}

			<CustomButton
				// className={styles.iconBtn}
				onClick={() => onEdit(actionId)}
			>
				<PencilLine />
			</CustomButton>

			{!onInfo ? null : (
				<CustomButton
					// className={styles.iconBtn}
					onClick={() => onInfo(actionId)}
				>
					<Eye />
				</CustomButton>
			)}
			<CustomButton
				// className={styles.iconBtn}
				onClick={() => onDelete(actionId)}
			>
				<Trash2 />
			</CustomButton>
		</>
	)
}

export default ActionButtons
