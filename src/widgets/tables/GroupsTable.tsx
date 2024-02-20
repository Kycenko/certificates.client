import { useGetCourses } from '@entities/Course/course.queries'
import {
	useCreateGroup,
	useDeleteGroup,
	useGetGroups,
	useUpdateGroup
} from '@entities/Group/group.queries.ts'
import { TypeGroupForm } from '@entities/Group/group.types.ts'
import Search from '@features/Search/Search.tsx'
import SortOrder from '@features/SortOrder/SortOrder.tsx'
import TableHeads, { GroupHeads } from '@features/TableHeads.tsx'
import GroupData from '@features/data/GroupData'
import { useModal } from '@shared/hooks'
import {
	CustomButton,
	CustomInput,
	CustomModalForm,
	CustomSelect,
	ErrorMessage
} from '@shared/ui'
import Loader from '@shared/ui/loader/CustomLoader.tsx'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import styles from '@shared/styles/Tables.module.scss'

const GroupsTable = () => {
	const navigate = useNavigate()
	const { groups, isLoading, refetch } = useGetGroups()
	const { courses } = useGetCourses()
	const { isOpen, openModal, closeModal } = useModal()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<TypeGroupForm>()

	const { create } = useCreateGroup()
	const { update } = useUpdateGroup()
	const { remove } = useDeleteGroup()

	const handleCreate: SubmitHandler<TypeGroupForm> = async data => {
		const newData = { ...data, courseId: Number(data.courseId) }
		await create(newData)
		closeModal()
		await refetch()
		reset()
	}

	const handleEdit = async (id: number | string, data: TypeGroupForm) => {
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
		navigate(`/groups/${id}`)
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
							Создать группу
						</CustomButton>
					</div>
					<table className={styles.table}>
						<thead className={styles.tHeads}>
							<TableHeads data={GroupHeads} />
						</thead>
						<tbody>
							<GroupData
								data={groups}
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
				<CustomSelect
					id='courseId'
					label='Выберите курс'
					{...register('courseId')}
				>
					{courses?.map(item => (
						<option
							key={item.id}
							value={item.id}
						>
							{item.number}-й курс
						</option>
					))}
				</CustomSelect>
				<ErrorMessage error={errors.name} />
			</CustomModalForm>
		</>
	)
}

export default GroupsTable
