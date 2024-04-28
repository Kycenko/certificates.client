import { addMonths } from 'date-fns'
import { memo, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import DetailsTableHeads from '@/components/tablesHeads/DetailsTableHeads.tsx'
import CustomButton from '@/shared/ui/buttons/CustomButton.tsx'
import CustomCheckBox from '@/shared/ui/inputs/CustomCheckBox/CustomCheckBox.tsx'

import { TypeMedicalCertificateForm } from '@/modules/medical-certificates/types/medical-certificate.types.ts'

import Layout from '@/app/Layout/Layout.tsx'
import ErrorMessage from '@/shared/ui/fields/ErrorMessage.tsx'
import Heading from '@/shared/ui/fields/Heading/Heading.tsx'
import CustomModalForm from '@/shared/ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomInput from '@/shared/ui/inputs/CustomInput/CustomInput.tsx'
import CustomLoader from '@/shared/ui/loader/CustomLoader.tsx'
import CustomSelect from '@/shared/ui/selects/CustomSelect.tsx'

import StudentDetailsData from './StudentDetailsData.tsx'
import { DetailsStudentHeads } from './student-heads.ts'
import styles from '@/app/styles/DetailsTables.module.scss'
import useAuth from '@/modules/auth/hooks/useAuth.ts'
import useModal from '@/shared/hooks/useModal.ts'
import { useGetHealthGroups } from '@/modules/health-groups/queries/health-group.query.ts'
import { useCreateMedicalCertificate } from '@/modules/medical-certificates/queries/medical-certificate.queries.ts'
import { useGetPhysicalEducations } from '@/modules/physical-educations/queries/physical-education.queries.ts'
import { useGetStudent } from '@/modules/students/queries/student.queries.ts'

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
		mode: 'onChange'
		//resolver: zodResolver(medicalCertificateValidationSchema)
	})

	const { create } = useCreateMedicalCertificate()

	const handleCreate: SubmitHandler<
		TypeMedicalCertificateForm
	> = async data => {
		let proposedEndDate

		if (isDurationSelected) {
			const durationMonths = parseInt(data.finishDate.toString())
			if (!isNaN(durationMonths)) {
				proposedEndDate = addMonths(new Date(), durationMonths)
			} else {
				console.error('Invalid duration provided:', data.finishDate)
				return
			}
		} else {
			proposedEndDate = new Date(data.finishDate)
		}

		let lastCertificateEndDate
		if (student?.medicalCertificates?.length) {
			lastCertificateEndDate = new Date(
				student.medicalCertificates[
					student.medicalCertificates.length - 1
				].finishDate
			)
		}

		if (lastCertificateEndDate && proposedEndDate <= lastCertificateEndDate) {
			alert(
				'Дата окончания новой справки должна быть позже даты окончания предыдущей справки.'
			)
			return
		}

		data.finishDate = proposedEndDate
		const newDate = {
			...data,
			healthGroupId: Number(data.healthGroupId),
			physicalEducationId: Number(data.physicalEducationId),
			studentId: student?.id,
			startDate: new Date()
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
				<CustomButton
					variant='create'
					onClick={openModal}
				>
					Добавить справку
				</CustomButton>
			) : null}
			<table className={styles.table}>
				<thead>
					<DetailsTableHeads data={DetailsStudentHeads} />
				</thead>
				<tbody>
					<StudentDetailsData
						data={student}
						healthGroups={healthGroups}
						physicalEducations={physicalEducations}
					/>
				</tbody>
			</table>
			<CustomModalForm
				onSubmit={handleSubmit(handleCreate)}
				buttonTitle={'Добавить'}
				isOpen={isOpen}
				onClose={closeModal}
				formTitle={'Добавление'}
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
				<CustomCheckBox
					className='mt-1'
					type='checkbox'
					checked={isDurationSelected}
					onChange={toggleDurationSelect}
					label={'Использовать конечную дату'}
					id={''}
				/>

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

export default memo(StudentDetailsTable)
