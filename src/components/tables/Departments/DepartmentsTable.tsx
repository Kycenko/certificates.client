import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import Search from '@/components/filters/Search/Search.tsx'
import SortOrder from '@/components/filters/SortOrder/SortOrder.tsx'
import DepartmentData from '@/components/tables/Departments/DepartmentData.tsx'
import TableHeads from '@/components/tables/tablesHeads/TableHeads.tsx'

import { PAGES_URL } from '@/constants/enums.ts'
import { DepartmentHeads } from '@/constants/table-heads.ts'

import { TypeDepartmentForm } from '@/types/department.types.ts'

import useModal from '@/hooks/useModal.ts'

import CustomButton from '../../ui/buttons/CustomButton.tsx'
import ErrorMessage from '../../ui/fields/ErrorMessage.tsx'
import CustomModalForm from '../../ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomInput from '../../ui/inputs/CustomInput.tsx'
import CustomLoader from '../../ui/loader/CustomLoader.tsx'

import styles from '@/app/styles/Tables.module.scss'
import { departmentValidationSchema } from '@/lib/validation/validation.schema.ts'
import {
	useCreateDepartment,
	useDeleteDepartment,
	useGetDepartments,
	useUpdateDepartment
} from '@/queries/department.queries.ts'

const DepartmentsTable = () => {
	const navigate = useNavigate()
	const [searchTerm, setSearchTerm] = useState<string>('')
	const { departments, isLoading, refetch } = useGetDepartments()

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

	const { create } = useCreateDepartment()
	const { update } = useUpdateDepartment()
	const { remove } = useDeleteDepartment()

	useEffect(() => {
		setFocus('name')
	}, [setFocus])

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
							<Search
								searchTerm={searchTerm}
								setSearchTerm={setSearchTerm}
								placeholder={'Поиск по названию отделения...'}
							/>
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
					{...register('name')}
				/>
				<ErrorMessage error={errors.name}></ErrorMessage>
			</CustomModalForm>
		</>
	)
}

export default DepartmentsTable
