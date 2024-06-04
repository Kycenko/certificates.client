import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import ActionButtons from '@/components/ActionButtons.tsx'
import NoData from '@/components/NoData.tsx'

import styles from '@/app/styles/Tables.module.scss'
import { ICourse } from '@/modules/courses/types/course.types'
import { IGroup, TypeGroupForm } from '@/modules/groups/types/group.types.ts'
import { groupValidationSchema } from '@/shared/helpers/validation.schema.ts'
import useAuth from '@/shared/hooks/useAuth.ts'
import useModal from '@/shared/hooks/useModal.ts'
import ErrorMessage from '@/shared/ui/fields/ErrorMessage.tsx'
import CustomModalForm from '@/shared/ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomInput from '@/shared/ui/inputs/CustomInput/CustomInput.tsx'
import CustomSelect from '@/shared/ui/selects/CustomSelect'

interface GroupDataProps {
	data: IGroup[] | undefined
	courses: ICourse[] | undefined
	onEdit: (id: number | string, data: TypeGroupForm) => void
	onDelete: (id: number | string) => void
	onInfo: (id: number | string) => void
}

const GroupData: FC<GroupDataProps> = ({
	data,
	courses,
	onDelete,
	onEdit,
	onInfo
}) => {
	const { setDeleteId, deleteId, editId, setEditId } = useModal()

	const { user } = useAuth()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setFocus
	} = useForm<TypeGroupForm>({
		mode: 'onChange',
		resolver: zodResolver(groupValidationSchema)
	})

	useEffect(() => {
		setFocus('name')
	})

	const [selectedDepartmentId, setSelectedDepartmentId] = useState<
		number | undefined
	>(undefined)

	useEffect(() => {
		if (data) {
			const group = data.find(group => group.id === editId)
			if (group) {
				setSelectedDepartmentId(group.course.departmentId)
			}
		}
	}, [editId, data])

	const filteredCourses = courses?.filter(
		course => course.departmentId === selectedDepartmentId
	)

	const handleEdit = (id: number | string) => {
		setEditId(id)
		reset()
	}
	const handleDelete = (id: number | string) => {
		onDelete(id)
		setDeleteId(null)
	}

	const onSubmit = (id: number | string, data: TypeGroupForm) => {
		onEdit(id, data)
		setEditId(null)
		reset()
	}
	if (!data || data.length === 0) return <NoData />

	return (
		<>
			{data?.map(({ id, name, students, course }) => (
				<>
					{user?.isAdmin ? (
						<tr
							className={styles.contentCell}
							key={id}
						>
							<td className={styles.cellPadding}>
								<span>{name}</span>
							</td>
							<td className={styles.cellPadding}>
								{`${course?.department?.name || 'Не указано'} `}
							</td>
							<td className={styles.cellPadding}>{`${course?.number}`}</td>
							<td className={styles.cellPadding}>{students?.length}</td>
							<td className={styles.editCellContainer}>
								<div className={styles.adminEditCell}>
									<ActionButtons
										onEdit={handleEdit}
										onDelete={() => setDeleteId(id)}
										actionId={id}
										onInfo={onInfo}
									/>
								</div>
							</td>
						</tr>
					) : null}

					<CustomModalForm
						onSubmit={handleSubmit(data => {
							const newData = {
								...data,
								courseId: Number(data.courseId)
							}
							onSubmit(id, newData)
						})}
						isOpen={editId === id}
						disabled={Object.keys(errors).length > 0}
						onClose={() => setEditId(null)}
						formTitle='Изменение'
						buttonTitle='Изменить'
					>
						<CustomInput
							id='name'
							label='Название'
							defaultValue={name}
							placeholder={'Введите название'}
							{...register('name')}
						/>
						<ErrorMessage error={errors.name} />
						<CustomSelect
							id='courseId'
							label='Выберите курс'
							defaultValue={course.number}
							{...register('courseId')}
						>
							{/* <CourseOptions /> */}
							{filteredCourses?.map(filteredCourse => (
								<option
									key={filteredCourse.id}
									value={filteredCourse.id}
								>
									{filteredCourse.number}-й курс
								</option>
							))}
						</CustomSelect>
					</CustomModalForm>
					<CustomModalForm
						onSubmit={() => handleDelete(id)}
						buttonTitle={'Удалить'}
						isOpen={deleteId === id}
						onClose={() => setDeleteId(null)}
						formTitle={'Удаление'}
					>
						{name}
					</CustomModalForm>
				</>
			))}
		</>
	)
}

export default GroupData
