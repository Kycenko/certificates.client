import { zodResolver } from '@hookform/resolvers/zod'
import { memo, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import TableHeads from '@/shared/components/tablesHeads/TableHeads.tsx'

import DepartmentsFilters from './DepartmentsFilters'
import styles from '@/shared/styles/Tables.module.scss'
import DepartmentData from '@/modules/departments/components/DepartmentData.tsx'
import { DepartmentHeads } from '@/modules/departments/components/department-heads.ts'
import {
	useCreateDepartment,
	useDeleteDepartment,
	useGetDepartments,
	useUpdateDepartment
} from '@/modules/departments/queries/department.queries.ts'
import {
	IDepartment,
	TypeDepartmentForm
} from '@/modules/departments/types/department.types.ts'
import { PAGES_URL } from '@/shared/constants/enums.ts'
import useModal from '@/shared/hooks/useModal.ts'
import useSortAndFilterData from '@/shared/hooks/useSortAndFilterData.ts'
import CustomButton from '@/shared/ui/buttons/CustomButton.tsx'
import ErrorMessage from '@/shared/ui/fields/ErrorMessage.tsx'
import CustomModalForm from '@/shared/ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomInput from '@/shared/ui/inputs/CustomInput/CustomInput.tsx'
import CustomLoader from '@/shared/ui/loader/CustomLoader.tsx'
import { departmentValidationSchema } from '@/shared/validation/validation.schema.ts'

const DepartmentsTable = memo(() => {
	const navigate = useNavigate()
	const [searchTerm, setSearchTerm] = useState<string>('')
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

	const { departments, isLoading, refetch } = useGetDepartments()

	const { sortedData } = useSortAndFilterData(
		departments as IDepartment[],
		searchTerm,
		sortOrder,
		'name'
	)

	window.history.pushState(null, '', `?search=${searchTerm}&sort=${sortOrder}`)

	const { isOpen, openModal, closeModal } = useModal()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setFocus
	} = useForm<TypeDepartmentForm>({
		mode: 'onChange',
		resolver: zodResolver(departmentValidationSchema)
	})

	useEffect(() => {
		setFocus('name')
	})

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
							<DepartmentsFilters
								searchTerm={searchTerm}
								setSearchTerm={setSearchTerm}
								sortOrder={sortOrder}
								setSortOrder={setSortOrder}
							/>
						</div>
						<CustomButton
							variant='create'
							onClick={openModal}
						>
							Добавить отделение
						</CustomButton>
					</div>

					<table className={styles.table}>
						<thead className={styles.tHeads}>
							<TableHeads data={DepartmentHeads} />
						</thead>
						<tbody>
							<DepartmentData
								data={sortedData}
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
				buttonTitle={'Добавить'}
				isOpen={isOpen}
				onClose={closeModal}
				formTitle={'Добавление'}
			>
				<CustomInput
					label={'Название'}
					id={'name'}
					placeholder={'Введите название'}
					{...register('name')}
				/>
				<ErrorMessage error={errors.name} />
			</CustomModalForm>
		</>
	)
})

export default DepartmentsTable
