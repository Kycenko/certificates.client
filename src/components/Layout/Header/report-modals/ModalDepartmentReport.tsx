import { FC, memo } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import CustomModalForm from '@/components/ui/forms/CustomModalForm/CustomModalForm'
import CustomSelect from '@/components/ui/selects/CustomSelect'

import { useGetDepartments } from '@/queries/department.queries'

interface FormState {
	departmentId: string | undefined
}

interface ModalProps {
	isOpen: boolean
	onClose: () => void
}

const ModalDepartmentReport: FC<ModalProps> = memo(({ isOpen, onClose }) => {
	const navigate = useNavigate()
	const { departments } = useGetDepartments()
	const { handleSubmit, register } = useForm<FormState>()
	const onSubmit = (data: FormState) => {
		navigate(`/reports/department-report/${data.departmentId}`)
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
				id='departmentId'
				label='Выберите отделение'
				{...register('departmentId')}
			>
				{departments?.map(({ id, name }) => (
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
})

export default ModalDepartmentReport
