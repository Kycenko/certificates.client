import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import DetailsTableHeads from '@/components/tablesHeads/DetailsTableHeads.tsx'

import { changeDuration } from '../helpers/changeDuration.ts'

import StudentDetailsData from './StudentDetailsData.tsx'
import { DetailsStudentHeads } from './student-heads.ts'
import styles from '@/app/styles/DetailsTables.module.scss'
import { useGetHealthGroups } from '@/modules/health-groups/api/health-group.query.ts'
import { useCreateMedicalCertificate } from '@/modules/medical-certificates/api/medical-certificate.queries.ts'
import { TypeMedicalCertificateForm } from '@/modules/medical-certificates/types/medical-certificate.types.ts'
import { useGetPhysicalEducations } from '@/modules/physical-educations/api/physical-education.queries.ts'
import { useGetStudent } from '@/modules/students/api/student.queries.ts'
import useAuth from '@/shared/hooks/useAuth.ts'
import useModal from '@/shared/hooks/useModal.ts'
import CustomButton from '@/shared/ui/buttons/CustomButton.tsx'
import ErrorMessage from '@/shared/ui/fields/ErrorMessage.tsx'
import Heading from '@/shared/ui/fields/Heading/Heading.tsx'
import CustomModalForm from '@/shared/ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomCheckBox from '@/shared/ui/inputs/CustomCheckBox/CustomCheckBox.tsx'
import CustomInput from '@/shared/ui/inputs/CustomInput/CustomInput.tsx'
import CustomLoader from '@/shared/ui/loader/CustomLoader.tsx'
import CustomSelect from '@/shared/ui/selects/CustomSelect.tsx'

const StudentDetailsTable = () => {
	const { id } = useParams()
	const { user } = useAuth()
	const { student, isLoading, refetch } = useGetStudent(id)
	const { physicalEducations } = useGetPhysicalEducations()
	const { healthGroups } = useGetHealthGroups()
	const { isOpen, openModal, closeModal } = useModal()
	const [isDurationSelected, setIsDurationSelected] = useState<boolean>(false)

	const toggleDurationSelect = () => setIsDurationSelected(!isDurationSelected)

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<TypeMedicalCertificateForm>({
		mode: 'onChange'
	})

	const { create } = useCreateMedicalCertificate()

	const handleCreate: SubmitHandler<
		TypeMedicalCertificateForm
	> = async data => {
		const result = changeDuration({ data, student, isDurationSelected })
		if (result.error) {
			return
		}

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

	return (
		<>
			<Heading title={'Описание обучающегося'}>
				<span className={styles.title}>
					{student?.surname} {student?.name} {student?.secondName}
				</span>
			</Heading>

			{user?.isAdmin ? (
				<CustomButton
					variant='create'
					onClick={openModal}
				>
					Добавить медицинскую справку
				</CustomButton>
			) : null}
			<table className={styles.table}>
				<thead>
					<DetailsTableHeads data={DetailsStudentHeads} />
				</thead>
				<tbody>
					{isLoading ? (
						<CustomLoader />
					) : (
						<StudentDetailsData
							data={student}
							healthGroups={healthGroups}
							physicalEducations={physicalEducations}
						/>
					)}
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
							{...register('finishDate', {
								required: { value: true, message: 'Обязательное поле' }
							})}
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
							{...register('startDate', {
								required: { value: true, message: 'Обязательное поле' }
							})}
						/>
						<ErrorMessage error={errors.startDate} />
						<CustomInput
							id='finishDate'
							label='Выберите дату окончания'
							type='date'
							{...register('finishDate', {
								required: { value: true, message: 'Обязательное поле' }
							})}
						/>
						<ErrorMessage error={errors.finishDate} />
					</>
				)}
				<CustomCheckBox
					type='checkbox'
					checked={isDurationSelected}
					onChange={toggleDurationSelect}
					label={'Использовать конечную дату'}
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

export default StudentDetailsTable
