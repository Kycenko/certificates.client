import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { PAGES_URL } from '@/constants/enums'
import { DepartmentHeads } from '@/constants/heads'

import { TypeDepartmentForm } from '@/types/department.types'

import useModal from '@/hooks/useModal'

import Search from '../Search/Search'
import SortOrder from '../SortOrder/SortOrder'
import TableHeads from '@/components/tables/tablesHeads/TableHeads'
import DepartmentData from '@/components/tables/tablesData/DepartmentData'
import CustomButton from '../ui/buttons/CustomButton'
import ErrorMessage from '../ui/fields/ErrorMessage'
import CustomModalForm from '../ui/forms/CustomModalForm/CustomModalForm'
import CustomInput from '../ui/inputs/CustomInput'
import CustomLoader from '../ui/loader/CustomLoader'

import styles from '@/app/styles/Tables.module.scss'
import {
	useCreateDepartment,
	useDeleteDepartment,
	useGetDepartments,
	useUpdateDepartment
} from '@/queries/department.queries'

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
		navigate(`${PAGES_URL.DEPARTMENTS}/${id}`)
	}

	if (isLoading) return <CustomLoader />
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
						<thead className={styles.tHeads}>
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
					{...register('name', {
						required: 'Обязательное поле',
						minLength: { value: 4, message: 'Минимум 4 символа' },
						maxLength: { value: 60, message: 'Максимум 60 символов' }
					})}
				/>
				<ErrorMessage error={errors.name}></ErrorMessage>
			</CustomModalForm>
		</>
	)
}

export default DepartmentsTable
