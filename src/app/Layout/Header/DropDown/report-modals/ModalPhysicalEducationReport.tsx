import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useGetDepartments } from '@/modules/departments/api/department.queries.ts'
import { useGetPhysicalEducations } from '@/modules/physical-educations/api/physical-education.queries.ts'
import CourseOptions from '@/shared/helpers/course.options.tsx'
import CustomModalForm from '@/shared/ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomSelect from '@/shared/ui/selects/CustomSelect.tsx'

interface FormState {
	departmentId: string | undefined
	courseId: string | undefined
	physicalEducationId: string | undefined
}

interface ModalProps {
	isOpen: boolean
	onClose: () => void
}

const ModalPhysicalEducationReport: FC<ModalProps> = ({ isOpen, onClose }) => {
	const navigate = useNavigate()
	const { departments } = useGetDepartments()
	const { physicalEducations } = useGetPhysicalEducations()
	const { handleSubmit, register } = useForm<FormState>()

	const onSubmit = (data: FormState) => {
		navigate(
			`/reports/pe-check-list?department=${data.departmentId}&course=${data.courseId}&pe=${data.physicalEducationId}`
		)

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
			<CustomSelect
				id='courseId'
				label='Выберите курс'
				{...register('courseId')}
			>
				<CourseOptions />
			</CustomSelect>
			<CustomSelect
				id='physicalEducationId'
				label='Выберите группу по физкультуре'
				{...register('physicalEducationId')}
			>
				{physicalEducations?.map(({ id, name }) => (
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

export default ModalPhysicalEducationReport
