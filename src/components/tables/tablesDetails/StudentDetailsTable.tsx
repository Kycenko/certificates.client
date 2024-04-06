import { zodResolver } from '@hookform/resolvers/zod'
import { addMonths, format } from 'date-fns'
import { useState } from 'react'
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
import { medicalCertificateValidationSchema } from '@/lib/validation/validation.schema.ts'
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
	const [isDurationSelected, setIsDurationSelected] = useState<boolean>(false)

	const toggleDurationSelect = () => {
		setIsDurationSelected(!isDurationSelected)
	}

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<TypeMedicalCertificateForm>({
		mode: 'onChange',
		resolver: zodResolver(medicalCertificateValidationSchema)
	})

	const { create } = useCreateMedicalCertificate()

	const handleCreate: SubmitHandler<
		TypeMedicalCertificateForm
	> = async data => {
		const newDate = {
			...data,
			healthGroupId: Number(data.healthGroupId),
			physicalEducationId: Number(data.physicalEducationId),
			studentId: student?.id,
			startDate: new Date()
		}

		if (isDurationSelected) {
			const durationMonths = parseInt(data.finishDate.toString())
			if (!isNaN(durationMonths)) {
				const currentDate = new Date()
				const res = addMonths(currentDate, durationMonths)
				data.finishDate = new Date(res)
				console.log(res)
			} else {
				console.error('Invalid duration provided:', data.finishDate)
			}
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
				{isDurationSelected ? (
					<>
						<CustomSelect
							id='finishDate'
							label='Выберите продолжительность'
							{...register('finishDate')}
						>
							<option value='3'>3 месяца</option>
							<option value='6'>6 месяцев</option>
							<option value='12'>12 месяцев</option>
						</CustomSelect>
						<ErrorMessage error={errors.finishDate} />
					</>
				) : (
					<>
						<CustomInput
							id='startDate'
							label='Выберите дату начала'
							type='date'
							{...register('startDate')}
						/>
						<ErrorMessage error={errors.startDate} />
						<CustomInput
							id='finishDate'
							label='Выберите дату окончания'
							type='date'
							{...register('finishDate')}
						/>
						<ErrorMessage error={errors.finishDate} />
					</>
				)}
				<input
					type='checkbox'
					checked={isDurationSelected}
					onChange={toggleDurationSelect}
				/>
				<label htmlFor=''>Использовать конечную дату?</label>
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
