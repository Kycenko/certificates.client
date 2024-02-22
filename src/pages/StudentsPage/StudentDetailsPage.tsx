import { Layout } from '@app/layout'
import { useGetHealthGroups } from '@entities/HealthGroup/health-group.query'
import { useCreateMedicalCertificate } from '@entities/MedicalCertificate/medical-certificate.queries'
import { TypeMedicalCertificateForm } from '@entities/MedicalCertificate/medical-certificate.types'
import { useGetPhysicalEducations } from '@entities/PhysicalEducation/physical-education.queries'
import { useGetStudent } from '@entities/Student/student.queries.ts'
import DetailsTableHeads from '@features/DetailsTableHeads'
import { DetailsStudentHeads } from '@shared/config/heads'
import { useAuth, useModal } from '@shared/hooks'
import {
	CustomInput,
	CustomModalForm,
	CustomSelect,
	ErrorMessage,
	Heading
} from '@shared/ui'
import CreateButton from '@shared/ui/buttons/CreateButton'
import Loader from '@shared/ui/loader/CustomLoader.tsx'
import daysUntilTheEnd from '@shared/utils/daysUntilTheEnd'
import getDaysUntilExpiry from '@shared/utils/getDaysUntilExpiry'
import getValidityPeriod from '@shared/utils/getValidityPeriod'
import { format } from 'date-fns'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import styles from '@shared/styles/DetailsTables.module.scss'

const StudentDetailsPage = () => {
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
		reset
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

	if (isLoading)
		return (
			<Layout>
				<Loader />
			</Layout>
		)
	return (
		<Layout>
			<Heading title={'Описание учащегося'}>
				<span className={styles.title}>
					{student?.surname} {student?.name} {student?.secondName}
				</span>
			</Heading>
			{user?.isAdmin ? (
				<CreateButton onClick={openModal}>Добавить справку</CreateButton>
			) : null}
			<table className={styles.table}>
				<thead>
					<DetailsTableHeads data={DetailsStudentHeads} />
				</thead>
				<tbody>
					{student?.medicalCertificates?.map(
						({
							id,
							startDate,
							finishDate,
							healthGroupId,
							physicalEducationId
						}) => (
							<tr
								className={`${
									daysUntilTheEnd(finishDate) === 'Да'
										? 'bg-green-200'
										: 'bg-red-200'
								} border text-center`}
								key={id}
							>
								<td className=' p-2'>
									{format(new Date(startDate), 'dd.MM.yyyy')}
								</td>
								<td className=' p-2'>
									{format(new Date(finishDate), 'dd.MM.yyyy')}
								</td>
								<td>{getValidityPeriod(finishDate, startDate)} </td>
								<td>{getDaysUntilExpiry(finishDate, startDate)}</td>
								<td>
									{healthGroups
										?.filter(({ id }) => id === healthGroupId)
										?.map(({ name }) => name)}
								</td>
								<td>
									{physicalEducations
										?.filter(({ id }) => id === physicalEducationId)
										?.map(({ name }) => name)}
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
				<CustomInput
					id='startDate'
					label='Выберите дату начала'
					type='date'
					{...register('startDate', { required: 'Обязательное поле' })}
				/>
				<ErrorMessage error={errors.startDate} />
				<CustomInput
					id='finishDate'
					label='Выберите дату окончания'
					type='date'
					{...register('finishDate', { required: 'Обязательное поле' })}
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
