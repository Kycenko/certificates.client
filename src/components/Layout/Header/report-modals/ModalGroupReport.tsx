import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import CustomModalForm from '@/components/ui/forms/CustomModalForm/CustomModalForm'
import CustomSelect from '@/components/ui/selects/CustomSelect'

import { useGetGroups } from '@/queries/group.queries'

interface FormState {
	groupId: string | undefined
}

interface ModalProps {
	isOpen: boolean
	onClose: () => void
}

const ModalGroupReport: FC<ModalProps> = ({ isOpen, onClose }) => {
	const navigate = useNavigate()
	const { groups } = useGetGroups()
	const { handleSubmit, register } = useForm<FormState>()

	const onSubmit = (data: FormState) => {
		navigate(`/reports/group-report/${data.groupId}`)
		onClose()
	}
	return (
		<CustomModalForm
			buttonTitle='Сформировать'
			formTitle='Отчет'
			isOpen={isOpen}
			onClose={onClose}
			onSubmit={handleSubmit(onSubmit)}
		>
			<CustomSelect
				id='groupId'
				label='Выберите группу'
				{...register('groupId')}
			>
				{groups?.map(({ id, name }) => (
					<option
						key={id}
						value={id}
					>
						{name}
					</option>
				))}
			</CustomSelect>
		</CustomModalForm>
	)
}

export default ModalGroupReport
