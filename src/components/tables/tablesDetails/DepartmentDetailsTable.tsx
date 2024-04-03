import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

import DetailsTableHeads from '@/components/tables/tablesHeads/DetailsTableHeads.tsx'

import { PAGES_URL } from '@/constants/enums.ts'
import { DetailsDepartmentHeads } from '@/constants/heads.ts'

import { TypeCourseForm } from '@/types/course.types.ts'

import useModal from '@/hooks/useModal.ts'

import Layout from '../../Layout/Layout.tsx'
import CreateButton from '../../ui/buttons/CreateButton.tsx'
import Heading from '../../ui/fields/Heading.tsx'
import CustomModalForm from '../../ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomLoader from '../../ui/loader/CustomLoader.tsx'
import CustomSelect from '../../ui/selects/CustomSelect.tsx'

import styles from '@/app/styles/DetailsTables.module.scss'
import { useCreateCourse } from '@/queries/course.queries.ts'
import { useGetDepartment } from '@/queries/department.queries.ts'

const DepartmentDetailsTable = () => {
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
				<CustomLoader />
			</Layout>
		)
	return (
		<>
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
							<td className={styles.cellPadding}>{`${number} Курс`}</td>
							<td className={styles.cellPadding}>
								{groups ? groups.length : 'Группы не найдены'}
							</td>
							<td className={styles.cellPadding}>{department.name}</td>
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
		</>
	)
}

export default DepartmentDetailsTable
