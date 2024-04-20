import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import CustomModalForm from '@/components/ui/forms/CustomModalForm/CustomModalForm'
import CustomSelect from '@/components/ui/selects/CustomSelect'

import CourseOptions from '@/lib/config/course.options'
import { useGetDepartments } from '@/queries/department.queries'
import { useGetPhysicalEducations } from '@/queries/physical-education.queries'

interface FormState {
	departmentId: string | undefined
	courseId: string | undefined
	physicalEducationId: string | undefined
}

interface ModalProps {
	isOpen: boolean
	onClose: () => void
}

const ModalHealthReport: FC<ModalProps> = ({ isOpen, onClose }) => {
	const navigate = useNavigate()
	const { departments } = useGetDepartments()
	const { physicalEducations } = useGetPhysicalEducations()
	const { handleSubmit, register } = useForm<FormState>()

	const onSubmit = (data: FormState) => {
		navigate(
			`/reports/check-list-report?department=${data.departmentId}&course=${data.courseId}&physical-education=${data.physicalEducationId}`
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

export default ModalHealthReport
