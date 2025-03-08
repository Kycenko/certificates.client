import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import TableHeads from '@/components/tablesHeads/TableHeads.tsx'

import useDepartmentActions from '../hooks/useDepartmentActions'

import DepartmentsFilters from './DepartmentsFilters'
import styles from '@/app/styles/Tables.module.scss'
import { useGetDepartments } from '@/modules/departments/api/department.queries.ts'
import DepartmentData from '@/modules/departments/components/DepartmentData.tsx'
import { DepartmentHeads } from '@/modules/departments/components/department-heads.ts'
import {
	IDepartment,
	TypeDepartmentForm
} from '@/modules/departments/types/department.types.ts'
import { PAGES_URL } from '@/shared/constants/enums.ts'
import { departmentValidationSchema } from '@/shared/helpers/validation.schema.ts'
import useModal from '@/shared/hooks/useModal.ts'
import useSortAndFilterData from '@/shared/hooks/useSortAndFilterData.ts'
import CustomButton from '@/shared/ui/buttons/CustomButton.tsx'
import ErrorMessage from '@/shared/ui/fields/ErrorMessage.tsx'
import CustomModalForm from '@/shared/ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomInput from '@/shared/ui/inputs/CustomInput/CustomInput.tsx'
import CustomLoader from '@/shared/ui/loader/CustomLoader.tsx'

const DepartmentsTable = () => {
	const navigate = useNavigate()

	const { departments, isLoading, refetch } = useGetDepartments()

	const { sortedData, searchTerm, setSearchTerm, sortOrder, setSortOrder } =
		useSortAndFilterData(departments as IDepartment[], 'name')

	useEffect(() => {
		window.history.pushState(
			null,
			'',
			`?search=${searchTerm}&sort=${sortOrder}`
		)
	}, [sortOrder, searchTerm])

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
	}, [isOpen, setFocus])

	const { handleCreate, handleEdit, handleDelete } = useDepartmentActions(
		refetch,
		reset,
		closeModal
	)

	const handleInfo = (id: number | string) => {
		navigate(`${PAGES_URL.DEPARTMENTS}/${id}`)
	}

	if (isLoading) return <CustomLoader />
	return (
		<>
			<div className={styles.container}>
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
				<div className={styles.tableContainer}>
					<table className={styles.table}>
						<thead className={styles.tHeads}>
							<TableHeads data={DepartmentHeads} />
						</thead>
						<tbody>
							{isLoading ? (
								<CustomLoader />
							) : (
								<DepartmentData
									data={sortedData}
									onDelete={handleDelete}
									onEdit={handleEdit}
									onInfo={handleInfo}
								/>
							)}
						</tbody>
					</table>
				</div>
			</div>
			<CustomModalForm
				onSubmit={handleSubmit(handleCreate)}
				buttonTitle={'Добавить'}
				disabled={Object.keys(errors).length > 0}
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
}

export default DepartmentsTable
