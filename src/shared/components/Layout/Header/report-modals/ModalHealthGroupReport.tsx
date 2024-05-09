import { FC, memo } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import CourseOptions from '@/modules/courses/helpers/course.options'
import { useGetDepartments } from '@/modules/departments/queries/department.queries'
import { useGetHealthGroups } from '@/modules/health-groups/queries/health-group.query'
import CustomModalForm from '@/shared/ui/forms/CustomModalForm/CustomModalForm'
import CustomSelect from '@/shared/ui/selects/CustomSelect'

interface FormState {
	departmentId: string | undefined
	courseId: string | undefined
	healthGroupId: string | undefined
}

interface ModalHealthGroupReportProps {
	isOpen: boolean
	onClose: () => void
}

const ModalHealthGroupReport: FC<ModalHealthGroupReportProps> = memo(
	({ isOpen, onClose }) => {
		const navigate = useNavigate()
		const { departments } = useGetDepartments()
		const { healthGroups } = useGetHealthGroups()
		const { handleSubmit, register } = useForm<FormState>()

		const onSubmit = (data: FormState) => {
			navigate(
				`/reports/hg-check-list?department=${data.departmentId}&course=${data.courseId}&hg=${data.healthGroupId}`
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
					id='healthGroupId'
					label='Выберите группу здоровья'
					{...register('healthGroupId')}
				>
					{healthGroups?.map(({ id, name }) => (
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
)

export default ModalHealthGroupReport
