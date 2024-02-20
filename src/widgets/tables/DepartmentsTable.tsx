import {
	useCreateDepartment,
	useDeleteDepartment,
	useGetDepartments,
	useUpdateDepartment
} from '@entities/Department/department.queries.ts'
import { TypeDepartmentForm } from '@entities/Department/department.types.ts'
import Search from '@features/Search/Search.tsx'
import SortOrder from '@features/SortOrder/SortOrder.tsx'
import TableHeads, { DepartmentHeads } from '@features/TableHeads.tsx'
import DepartmentData from '@features/data/DepartmentData'
import { useModal } from '@shared/hooks'
import {
	CustomButton,
	CustomInput,
	CustomModalForm,
	ErrorMessage
} from '@shared/ui'
import Loader from '@shared/ui/loader/CustomLoader.tsx'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import styles from '@shared/styles/Tables.module.scss'

const DepartmentsTable = () => {
	const navigate = useNavigate()
	const { departments, isLoading, refetch } = useGetDepartments()

	const { isOpen, openModal, closeModal } = useModal()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<TypeDepartmentForm>()

	const { create } = useCreateDepartment()
	const { update } = useUpdateDepartment()
	const { remove } = useDeleteDepartment()

	const handleCreate: SubmitHandler<TypeDepartmentForm> = async data => {
		await create(data)
		closeModal()
		await refetch()
		reset()
	}

	const handleEdit = async (id: number | string, data: TypeDepartmentForm) => {
		await update({ id, data })
		closeModal()
		await refetch()
	}

	const handleDelete = async (id: number | string) => {
		await remove(id)
		closeModal()
		await refetch()
	}

	const handleInfo = (id: number | string) => {
		navigate(`/departments/${id}`)
	}

	if (isLoading) return <Loader />
	return (
		<>
			<div className={styles.container}>
				<div className={styles.tableContainer}>
					<div className={styles.headerContainer}>
						<div className={styles.header}>
							<Search />
							<SortOrder />
						</div>
						<CustomButton
							className={styles.createBtn}
							onClick={openModal}
						>
							Создать отделение
						</CustomButton>
					</div>
					<table className={styles.table}>
						<thead>
							<TableHeads data={DepartmentHeads} />
						</thead>
						<tbody>
							<DepartmentData
								data={departments}
								onDelete={handleDelete}
								onEdit={handleEdit}
								onInfo={handleInfo}
							/>
						</tbody>
					</table>
				</div>
			</div>
			<CustomModalForm
				onSubmit={handleSubmit(handleCreate)}
				buttonTitle={'Создать'}
				isOpen={isOpen}
				onClose={closeModal}
				formTitle={'Создание'}
			>
				<CustomInput
					label={'Название'}
					id={'name'}
					placeholder={'Введите название'}
					{...register('name', { required: 'Обязательное поле' })}
				/>
				<ErrorMessage error={errors.name} />
			</CustomModalForm>
		</>
	)
}

export default DepartmentsTable
