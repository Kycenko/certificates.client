import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { memo } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import DetailsTableHeads from '@/components/tablesHeads/DetailsTableHeads.tsx'
import CustomButton from '@/shared/ui/buttons/CustomButton.tsx'

import { TypeStudentForm } from '@/modules/students/types/student.types.ts'

import ErrorMessage from '@/shared/ui/fields/ErrorMessage.tsx'
import Heading from '@/shared/ui/fields/Heading/Heading.tsx'
import CustomModalForm from '@/shared/ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomInput from '@/shared/ui/inputs/CustomInput/CustomInput.tsx'
import CustomLoader from '@/shared/ui/loader/CustomLoader.tsx'

import GroupDetailsData from './GroupDetailsData.tsx'
import { DetailsGroupHeads } from './group-heads.ts'
import styles from '@/app/styles/DetailsTables.module.scss'
import useAuth from '@/modules/auth/hooks/useAuth.ts'
import useModal from '@/shared/hooks/useModal.ts'
import { studentValidationSchema } from '@/shared/validation/validation.schema.ts'
import { useGetGroup } from '@/modules/groups/queries/group.queries.ts'
import { useCreateStudent } from '@/modules/students/queries/student.queries.ts'

const GroupDetailsTable = memo(() => {
	const { id } = useParams()
	const { user } = useAuth()
	const { group, refetch, isLoading } = useGetGroup(id)
	const { isOpen, openModal, closeModal } = useModal()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<TypeStudentForm>({
		mode: 'onChange',
		resolver: zodResolver(studentValidationSchema)
	})

	const { create } = useCreateStudent()

	const handleCreate: SubmitHandler<TypeStudentForm> = async data => {
		const newData = { ...data, groupId: group?.id }
		await create(newData)
		closeModal()
		await refetch()
		reset()
	}

	if (isLoading) return <CustomLoader />

	return (
		<>
			<Heading title={'Описание группы'}>
				<span className={styles.title}>{group?.name}</span>
			</Heading>
			{user?.isAdmin ? (
				<CustomButton
					variant='create'
					onClick={openModal}
				>
					Добавить ученика
				</CustomButton>
			) : null}
			<table className={styles.table}>
				<thead>
					<DetailsTableHeads data={DetailsGroupHeads} />
				</thead>
				<tbody>
					<GroupDetailsData data={group} />
				</tbody>
			</table>
			<CustomModalForm
				onSubmit={handleSubmit(handleCreate)}
				buttonTitle={'Добавить'}
				isOpen={isOpen}
				onClose={closeModal}
				formTitle={'Добавление'}
			>
				<CustomInput
					label={'Фамилия'}
					id={'surname'}
					placeholder={'Введите фамилию'}
					{...register('surname')}
				/>
				<ErrorMessage error={errors.surname} />
				<CustomInput
					label={'Имя'}
					id={'name'}
					placeholder={'Введите имя'}
					{...register('name')}
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
					{...register('birthDate')}
				/>
				<ErrorMessage error={errors.birthDate} />
			</CustomModalForm>
		</>
	)
})

export default GroupDetailsTable
