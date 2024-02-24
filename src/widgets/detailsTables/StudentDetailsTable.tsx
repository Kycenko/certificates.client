import { Layout } from '@app/layout'
import { useGetHealthGroups } from '@entities/HealthGroup'
import {
	TypeMedicalCertificateForm,
	useCreateMedicalCertificate
} from '@entities/MedicalCertificate'
import { useGetPhysicalEducations } from '@entities/PhysicalEducation'
import { useGetStudent } from '@entities/Student'
import { DetailsTableHeads } from '@features/heads'
import { DetailsStudentHeads } from '@shared/config'
import { useAuth, useModal } from '@shared/hooks'
import {
	CreateButton,
	CustomInput,
	CustomLoader,
	CustomModalForm,
	CustomSelect,
	ErrorMessage,
	Heading
} from '@shared/ui'
import {
	daysUntilTheEnd,
	getDaysUntilExpiry,
	getValidityPeriod
} from '@shared/utils'
import { format } from 'date-fns'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import styles from '@shared/styles/DetailsTables.module.scss'

const StudentDetailsTable = () => {
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
				<CustomLoader />
			</Layout>
		)
	return (
		<>
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
										? `${styles.yesDaysCell}`
										: `${styles.noDaysCell}`
								} ${styles.daysCell}`}
								key={id}
							>
								<td className={styles.cellPadding}>
									{format(new Date(startDate), 'dd.MM.yyyy')}
								</td>
								<td className={styles.cellPadding}>
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
		</>
	)
}

export default StudentDetailsTable
