import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useGetDepartments } from '@/modules/departments/api/department.queries.ts'
import { useGetHealthGroups } from '@/modules/health-groups/api/health-group.query.ts'
import { PAGES_URL } from '@/shared/constants/enums'
import CourseOptions from '@/shared/helpers/course.options.tsx'
import CustomModalForm from '@/shared/ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomSelect from '@/shared/ui/selects/CustomSelect.tsx'

interface FormState {
	departmentId: string | undefined
	courseId: string | undefined
	healthGroupId: string | undefined
}

interface ModalHealthGroupReportProps {
	isOpen: boolean
	onClose: () => void
}

const ModalHealthGroupReport: FC<ModalHealthGroupReportProps> = ({
	isOpen,
	onClose
}) => {
	const navigate = useNavigate()
	const { departments } = useGetDepartments()
	const { healthGroups } = useGetHealthGroups()
	const { handleSubmit, register } = useForm<FormState>()

	const onSubmit = (data: FormState) => {
		navigate(
			`${PAGES_URL.HG_REPORT}?department=${data.departmentId}&course=${data.courseId}&hg=${data.healthGroupId}`
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
						value={name}
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
				id='healthGroupId'
				label='Выберите группу здоровья'
				{...register('healthGroupId')}
			>
				{healthGroups?.map(({ id, name }) => (
					<option
						key={id}
						value={name}
					>
						{name}
					</option>
				))}
			</CustomSelect>
		</CustomModalForm>
	)
}

export default ModalHealthGroupReport
