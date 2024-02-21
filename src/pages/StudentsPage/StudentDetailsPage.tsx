import { Layout } from '@app/layout'
import { useGetHealthGroups } from '@entities/HealthGroup/health-group.query'
import { useCreateMedicalCertificate } from '@entities/MedicalCertificate/medical-certificate.queries'
import { TypeMedicalCertificateForm } from '@entities/MedicalCertificate/medical-certificate.types'
import { useGetPhysicalEducations } from '@entities/PhysicalEducation/physical-education.queries'
import { useGetStudent } from '@entities/Student/student.queries.ts'
import { useAuth, useModal } from '@shared/hooks'
import {
	CustomModalForm,
	CustomSelect,
	ErrorMessage,
	Heading
} from '@shared/ui'
import CreateButton from '@shared/ui/buttons/CreateButton'
import Loader from '@shared/ui/loader/CustomLoader.tsx'
import DateSelect from '@shared/ui/selects/DateSelect'
import { format } from 'date-fns'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

const StudentDetailsPage = () => {
	const navigate = useNavigate()
	const { id } = useParams()
	const { user } = useAuth()
	const { student, isLoading, refetch } = useGetStudent(id)
	const { physicalEducations } = useGetPhysicalEducations()
	const { healthGroups } = useGetHealthGroups()
	const { isOpen, openModal, closeModal } = useModal()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		watch,
		setValue
	} = useForm<TypeMedicalCertificateForm>()

	const { create } = useCreateMedicalCertificate()

	const handleCreate: SubmitHandler<
		TypeMedicalCertificateForm
	> = async data => {
		const newDate = {
			...data,
			healthGroupId: Number(data.healthGroupId),
			physicalEducationId: Number(data.physicalEducationId),
			studentId: student?.id
		}
		await create(newDate)
		closeModal()
		await refetch()
		reset()
	}
	const getValidityPeriod = (finishDate: Date, startDate: Date) => {
		const start = new Date(startDate)
		const finish = new Date(finishDate)

		let months
		months = (finish.getFullYear() - start.getFullYear()) * 12
		months -= start.getMonth()
		months += finish.getMonth()
		return `${months === 0 ? 'Текущий месяц' : `${months} месяц(а/ев)`}`
	}

	const getDaysUntilExpiry = (finishDate: any, startDay: any) => {
		const start = new Date(startDay) as any
		const end = new Date(finishDate) as any

		const diffTime = Math.abs(end - start)
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

		return diffDays
	}

	const daysUntilTheEnd = (date: Date) => {
		const finishDate = new Date(date)
		const currentDate = new Date()

		return finishDate > currentDate ? 'Да' : 'Нет'
	}

	if (isLoading)
		return (
			<Layout>
				<Loader />
			</Layout>
		)
	return (
		<Layout>
			<Heading title={'Описание учащегося'}>
				<span className='text-base text-gray-500'>
					{student?.surname} {student?.name} {student?.secondName}
				</span>
			</Heading>
			{user?.isAdmin ? (
				<CreateButton onClick={openModal}>Добавить справку</CreateButton>
			) : (
				''
			)}
			<table className='min-w-full border-gray-300'>
				<thead>
					<tr className='border'>
						<th className=' p-2'>Владелец</th>
						<th className=' p-2'>Дата начала</th>
						<th className=' p-2'>Дата окончания</th>
						<th className=' p-2'>Срок действия</th>
						<th className=' p-2'>Дней до конца действия</th>
						<th className=' p-2'>Группа здоровья</th>
						<th className=' p-2'>Группа по физкультуре</th>
						<th className=' p-2'>Действительна?</th>
					</tr>
				</thead>
				<tbody>
					{student?.medicalCertificates?.map(
						({ id, startDate, finishDate }) => (
							<tr
								onClick={() => navigate(`/courses/${id}`)}
								className='border hover:bg-gray-200 text-center cursor-pointer'
								key={id}
							>
								<td>{student?.name}</td>
								<td className=' p-2'>
									{format(new Date(startDate), 'dd.MM.yyyy')}
								</td>
								<td className=' p-2'>
									{format(new Date(finishDate), 'dd.MM.yyyy')}
								</td>
								<td>{getValidityPeriod(finishDate, startDate)} </td>
								<td>{getDaysUntilExpiry(finishDate, startDate)}</td>
								<td>
									{student?.medicalCertificates.map(item => item.healthGroupId)}
								</td>
								<td>
									{student?.medicalCertificates.map(
										item => item.physicalEducationId
									)}
								</td>
								<td>{daysUntilTheEnd(finishDate)}</td>
							</tr>
						)
					)}
				</tbody>
			</table>
			<CustomModalForm
				onSubmit={handleSubmit(handleCreate)}
				buttonTitle={'Создать'}
				isOpen={isOpen}
				onClose={closeModal}
				formTitle={'Создание'}
			>
				<DateSelect
					{...register('startDate', { required: 'Обязательное поле' })}
					dateFormat='dd.MM.yyyy'
					selected={watch('startDate')}
					onChange={(date: any) => setValue('startDate', date)}
					id={'startDate'}
					label={'Дата начала'}
				/>
				<ErrorMessage error={errors.startDate} />
				<DateSelect
					{...register('finishDate', { required: 'Обязательное поле' })}
					dateFormat='dd.MM.yyyy'
					selected={watch('finishDate')}
					onChange={(date: any) => setValue('finishDate', date)}
					id={'finishDate'}
					label={'Дата окончания'}
				/>
				<ErrorMessage error={errors.finishDate} />
				<CustomSelect
					id='healthGroupId'
					label='Выберите группу здоровья'
					{...register('healthGroupId')}
				>
					{healthGroups?.map(({ id, name }) => (
						<option
							value={id}
							key={id}
						>
							{name}
						</option>
					))}
				</CustomSelect>
				<CustomSelect
					id='physicalEducationId'
					label='Выберите группу по физкультуре'
					{...register('physicalEducationId')}
				>
					{physicalEducations?.map(({ id, name }) => (
						<option
							value={id}
							key={id}
						>
							{name}
						</option>
					))}
				</CustomSelect>
			</CustomModalForm>
		</Layout>
	)
}

export default StudentDetailsPage
