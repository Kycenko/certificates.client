import { Layout } from '@app/layout'
import { useGetGroup } from '@entities/Group/group.queries'
import { useCreateStudent } from '@entities/Student/student.queries'
import { TypeStudentForm } from '@entities/Student/student.types'
import DetailsTableHeads from '@features/DetailsTableHeads'
import { PAGES_URL } from '@shared/config/enums'
import { DetailsGroupHeads } from '@shared/config/heads'
import { useAuth, useModal } from '@shared/hooks'
import { CustomInput, CustomModalForm, ErrorMessage, Heading } from '@shared/ui'
import CreateButton from '@shared/ui/buttons/CreateButton'
import { format } from 'date-fns'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

import styles from '@shared/styles/DetailsTables.module.scss'

const GroupDetailsPage = () => {
	const navigate = useNavigate()
	const { id } = useParams()
	const { user } = useAuth()
	const { group, refetch } = useGetGroup(id)
	const { isOpen, openModal, closeModal } = useModal()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<TypeStudentForm>()

	const { create } = useCreateStudent()

	const handleCreate: SubmitHandler<TypeStudentForm> = async data => {
		const newData = { ...data, groupId: group?.id }
		await create(newData)
		closeModal()
		await refetch()
		reset()
	}
	return (
		<Layout>
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
								<td className=' p-2'>{surname}</td>
								<td className=' p-2'>{name}</td>
								<td className='p-2'>
									{secondName ? secondName : 'Не указано'}
								</td>
								<td className='p-2'>
									{format(new Date(birthDate), 'dd.MM.yyyy')}
								</td>
								<td className='p-2'>{group.name}</td>
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
					{...register('surname', { required: 'Обязательное поле' })}
				/>
				<ErrorMessage error={errors.surname} />
				<CustomInput
					label={'Имя'}
					id={'name'}
					placeholder={'Введите имя'}
					{...register('name', { required: 'Обязательное поле' })}
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
		</Layout>
	)
}

export default GroupDetailsPage
