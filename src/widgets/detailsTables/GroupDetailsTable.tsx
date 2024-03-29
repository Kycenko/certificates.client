import { Layout } from '@app/layout'
import { useGetGroup } from '@entities/Group'
import { TypeStudentForm, useCreateStudent } from '@entities/Student'
import { DetailsTableHeads } from '@features/heads'
import { DetailsGroupHeads, PAGES_URL } from '@shared/config'
import { useAuth, useModal } from '@shared/hooks'
import {
	CreateButton,
	CustomInput,
	CustomLoader,
	CustomModalForm,
	ErrorMessage,
	Heading
} from '@shared/ui'
import { format } from 'date-fns'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

import styles from '@shared/styles/DetailsTables.module.scss'

const GroupDetailsTable = () => {
	const navigate = useNavigate()
	const { id } = useParams()
	const { user } = useAuth()
	const { group, refetch, isLoading } = useGetGroup(id)
	const { isOpen, openModal, closeModal } = useModal()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<TypeStudentForm>({ mode: 'onChange' })

	const { create } = useCreateStudent()

	const handleCreate: SubmitHandler<TypeStudentForm> = async data => {
		const newData = { ...data, groupId: group?.id }
		await create(newData)
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
			<Heading title={'Описание группы'}>
				<span className={styles.title}>{group?.name}</span>
			</Heading>
			{user?.isAdmin ? (
				<CreateButton onClick={openModal}>Добавить ученика</CreateButton>
			) : null}
			<table className={styles.table}>
				<thead>
					<DetailsTableHeads data={DetailsGroupHeads} />
				</thead>
				<tbody>
					{group?.students?.map(
						({
							id,
							surname,
							name,
							secondName,
							birthDate,
							medicalCertificates
						}) => (
							<tr
								onClick={() => navigate(`${PAGES_URL.STUDENTS}/${id}`)}
								className={styles.cell}
								key={id}
							>
								<td className={styles.cellPadding}>{surname}</td>
								<td className={styles.cellPadding}>{name}</td>
								<td className={styles.cellPadding}>
									{secondName ? secondName : 'Не указано'}
								</td>
								<td className={styles.cellPadding}>
									{format(new Date(birthDate), 'dd.MM.yyyy')}
								</td>
								<td className={styles.cellPadding}>{group.name}</td>
								<td>{medicalCertificates?.length}</td>
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
					label={'Фамилия'}
					id={'surname'}
					placeholder={'Введите фамилию'}
					{...register('surname', {
						required: 'Обязательное поле',
						minLength: { value: 5, message: 'Минимум 5 символов' },
						maxLength: { value: 30, message: 'Максимум 30 символов' }
					})}
				/>
				<ErrorMessage error={errors.surname} />
				<CustomInput
					label={'Имя'}
					id={'name'}
					placeholder={'Введите имя'}
					{...register('name', {
						required: 'Обязательное поле',
						minLength: { value: 3, message: 'Минимум 3 символа' },
						maxLength: { value: 30, message: 'Максимум 30 символов' }
					})}
				/>
				<ErrorMessage error={errors.name} />
				<CustomInput
					label={'Отчество'}
					id={'secondName'}
					placeholder={'Введите отчество'}
					{...register('secondName')}
				/>
				<ErrorMessage error={errors.secondName} />
				<CustomInput
					id='birthDate'
					label='Выберите дату рождения'
					type='date'
					max={format(new Date(), 'yyyy-MM-dd')}
					{...register('birthDate', { required: 'Обязательное поле' })}
				/>
				<ErrorMessage error={errors.birthDate} />
			</CustomModalForm>
		</>
	)
}

export default GroupDetailsTable
