import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { PAGES_URL } from '@/shared/constants/enums'
import CustomModalForm from '@/shared/ui/forms/CustomModalForm/CustomModalForm.tsx'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
}

const ModalExpiredCertificatesReport: FC<ModalProps> = ({
	isOpen,
	onClose
}) => {
	const navigate = useNavigate()

	const onSubmit = () => {
		navigate(`${PAGES_URL.EXPIRED_REPORT}`)
		onClose()
	}

	return (
		<CustomModalForm
			buttonTitle='Сформировать'
			formTitle='Отчет'
			isOpen={isOpen}
			onClose={onClose}
			onSubmit={onSubmit}
		>
			Отчет по истёкшим медицинским справкам
		</CustomModalForm>
	)
}

export default ModalExpiredCertificatesReport
