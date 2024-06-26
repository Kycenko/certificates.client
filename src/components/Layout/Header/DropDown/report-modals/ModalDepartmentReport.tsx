import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useGetDepartments } from '@/modules/departments/api/department.queries.ts'
import { PAGES_URL } from '@/shared/constants/enums'
import CustomModalForm from '@/shared/ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomSelect from '@/shared/ui/selects/CustomSelect.tsx'

interface FormState {
	departmentId: string | undefined
}

interface ModalProps {
	isOpen: boolean
	onClose: () => void
}

const ModalDepartmentReport: FC<ModalProps> = ({ isOpen, onClose }) => {
	const navigate = useNavigate()
	const { departments } = useGetDepartments()
	const { handleSubmit, register } = useForm<FormState>()
	const onSubmit = (data: FormState) => {
		navigate(`${PAGES_URL.DEPARTMENT_REPORT}/${data.departmentId}`)
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
}

export default ModalDepartmentReport
