import { format } from 'date-fns'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import DetailsTableHeads from '@/components/tables/tablesHeads/DetailsTableHeads.tsx'

import { DetailsStudentHeads } from '@/constants/table-heads.ts'

import { TypeMedicalCertificateForm } from '@/types/medical-certificate.types.ts'

import useAuth from '@/hooks/useAuth.ts'
import useModal from '@/hooks/useModal.ts'

import Layout from '../../Layout/Layout.tsx'
import CreateButton from '../../ui/buttons/CreateButton.tsx'
import ErrorMessage from '../../ui/fields/ErrorMessage.tsx'
import Heading from '../../ui/fields/Heading.tsx'
import CustomModalForm from '../../ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomInput from '../../ui/inputs/CustomInput.tsx'
import CustomLoader from '../../ui/loader/CustomLoader.tsx'
import CustomSelect from '../../ui/selects/CustomSelect.tsx'

import styles from '@/app/styles/DetailsTables.module.scss'
import daysUntilTheEnd from '@/lib/utils/daysUntilTheEnd.ts'
import getDaysUntilExpiry from '@/lib/utils/getDaysUntilExpiry.ts'
import getValidityPeriod from '@/lib/utils/getValidityPeriod.ts'
import { useGetHealthGroups } from '@/queries/health-group.query.ts'
import { useCreateMedicalCertificate } from '@/queries/medical-certificate.queries.ts'
import { useGetPhysicalEducations } from '@/queries/physical-education.queries.ts'
import { useGetStudent } from '@/queries/student.queries.ts'

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
			// finishDate: data.finishDate
		}

		// if (!isNaN(parseInt(data.finishDate))) {
		// 	const monthsToAdd = parseInt(data.finishDate)
		// 	const startDate = new Date(data.startDate)
		// 	newDate.finishDate = addMonths(startDate, monthsToAdd)
		// }
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
								className={`
								${styles.daysCell}
								${daysUntilTheEnd(finishDate) === 'Да' ? styles.greenBg : styles.redBg}
								${getDaysUntilExpiry(finishDate, startDate) < 30 ? styles.yellowBg : null}
							`}
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
