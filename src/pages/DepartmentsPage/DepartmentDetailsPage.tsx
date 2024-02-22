import { Layout } from '@app/layout'
import { useCreateCourse } from '@entities/Course/course.queries'
import { TypeCourseForm } from '@entities/Course/course.types'
import { useGetDepartment } from '@entities/Department/department.queries'
import DetailsTableHeads from '@features/DetailsTableHeads'
import { PAGES_URL } from '@shared/config/enums'
import { DetailsDepartmentHeads } from '@shared/config/heads'
import { useModal } from '@shared/hooks'
import { CustomModalForm, CustomSelect, Heading } from '@shared/ui'
import CreateButton from '@shared/ui/buttons/CreateButton'
import Loader from '@shared/ui/loader/CustomLoader'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

import styles from '@shared/styles/DetailsTables.module.scss'

const DepartmentDetailsPage = () => {
	const navigate = useNavigate()
	const { id } = useParams()

	const { department, isLoading, refetch } = useGetDepartment(id)

	const { isOpen, closeModal, openModal } = useModal()
	const { create } = useCreateCourse()
	const {
		register,
		handleSubmit,

		reset
	} = useForm<TypeCourseForm>()

	const handleCreate: SubmitHandler<TypeCourseForm> = async data => {
		const newData = {
			...data,
			departmentId: department?.id,
			number: Number(data.number)
		}
		await create(newData)
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
			<Heading title={'Описание отделения'}>
				<span className={styles.title}>{department?.name}</span>
			</Heading>
			<CreateButton onClick={openModal}>Создать курс</CreateButton>

			<table className={styles.table}>
				<thead>
					<DetailsTableHeads data={DetailsDepartmentHeads} />
				</thead>
				<tbody>
					{department?.courses?.map(({ id, number, groups }) => (
						<tr
							onClick={() => navigate(`${PAGES_URL.COURSES}/${id}`)}
							className={styles.cell}
							key={id}
						>
							<td className=' p-2'>{`${number} Курс`}</td>
							<td className=' p-2'>
								{groups ? groups.length : 'Группы не найдены'}
							</td>
							<td className='p-2'>{department.name}</td>
						</tr>
					))}
				</tbody>
			</table>
			<CustomModalForm
				onSubmit={handleSubmit(handleCreate)}
				buttonTitle={'Создать'}
				isOpen={isOpen}
				onClose={closeModal}
				formTitle={'Создание'}
			>
				<CustomSelect
					id='number'
					label='Выберите номер курса'
					{...register('number', { required: 'Обязательное поле' })}
				>
					<option
						key={1}
						value={1}
					>
						1 курс
					</option>
					<option
						key={2}
						value={2}
					>
						2 курс
					</option>
					<option
						key={3}
						value={3}
					>
						3 курс
					</option>
					<option
						key={4}
						value={4}
					>
						4 курс
					</option>
				</CustomSelect>
			</CustomModalForm>
		</Layout>
	)
}

export default DepartmentDetailsPage
