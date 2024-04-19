import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import CustomModalForm from '@/components/ui/forms/CustomModalForm/CustomModalForm.tsx'
import CustomSelect from '@/components/ui/selects/CustomSelect'

import Dropdown from './DropDown'
import CourseOptions from '@/lib/config/course.options'
import useAuth from '@/lib/hooks/useAuth.ts'
import { useGetDepartments } from '@/queries/department.queries.ts'
import { useGetGroups } from '@/queries/group.queries'
import { useGetPhysicalEducations } from '@/queries/physical-education.queries'

interface FormState {
	departmentId: string | undefined
	groupId: string | undefined
	courseId: string | undefined
	physicalEducationId: string | undefined
}

interface HealthFormState {
	departmentId: string | undefined
	courseId: string | undefined
	physicalEducationId: string | undefined
}

const Header = () => {
	const navigate = useNavigate()
	const { user } = useAuth()
	const [isOpen, setIsOpen] = useState(false)
	const [isOpen1, setIsOpen1] = useState(false)
	const [isOpen2, setIsOpen2] = useState(false)
	const { departments } = useGetDepartments()
	const { groups } = useGetGroups()

	const { physicalEducations } = useGetPhysicalEducations()
	const { handleSubmit, register } = useForm<FormState>()

	const onSubmit = (data: FormState) => {
		navigate(`/reports/department-report/${data.departmentId}`)
		setIsOpen(false)
	}
	const onSubmit1 = (data: FormState) => {
		navigate(`/reports/group-report/${data.courseId}`)
		setIsOpen1(false)
	}
	const onSubmit2 = (data: HealthFormState) => {
		navigate(
			`/reports/check-list-report?department=${data.departmentId}&course=${data.courseId}&physical-education=${data.physicalEducationId}`
		)
		setIsOpen2(false)
	}

	return user?.isAdmin ? (
		<div className={'border-b-2 flex justify-start py-4'}>
			<div className={'justify-start text-blue-gray-900'}>
				<ul className={'ml-2 flex flex-row gap-2 cursor-pointer'}>
					<Dropdown>
						<li
							onClick={() => setIsOpen(true)}
							className=' block px-4 py-2 text-sm  text-gray-700 hover:bg-gray-100'
						>
							Отчёт по отделению
						</li>
						<li
							onClick={() => setIsOpen1(true)}
							className='block px-4 py-2 text-sm  text-gray-700 hover:bg-gray-100'
						>
							Отчёт по группе
						</li>

						<li
							onClick={() => setIsOpen2(true)}
							className='block px-4 py-2 text-sm  text-gray-700 hover:bg-gray-100'
						>
							Листок здоровья
						</li>
					</Dropdown>
				</ul>
			</div>
			<CustomModalForm
				buttonTitle='Сформировать'
				formTitle='Отчет'
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				onSubmit={handleSubmit(onSubmit)}
			>
				<CustomSelect
					id='departmentId'
					label='Выберите отделение'
					{...register('departmentId')}
				>
					{departments?.map(({ id, name }) => (
						<option
							key={id}
							value={id}
						>
							{name}
						</option>
					))}
				</CustomSelect>
			</CustomModalForm>
			<CustomModalForm
				buttonTitle='Сформировать'
				formTitle='Отчет'
				isOpen={isOpen1}
				onClose={() => setIsOpen1(false)}
				onSubmit={handleSubmit(onSubmit1)}
			>
				<CustomSelect
					id='groupId'
					label='Выберите группу'
					{...register('groupId')}
				>
					{groups?.map(({ id, name }) => (
						<option
							key={id}
							value={id}
						>
							{name}
						</option>
					))}
				</CustomSelect>
			</CustomModalForm>
			<CustomModalForm
				buttonTitle='Сформировать'
				formTitle='Отчет'
				isOpen={isOpen2}
				onClose={() => setIsOpen2(false)}
				onSubmit={handleSubmit(onSubmit2)}
			>
				<CustomSelect
					id='departmentId'
					label='Выберите отделение'
					{...register('departmentId')}
				>
					{departments?.map(({ id, name }) => (
						<option
							key={id}
							value={id}
						>
							{name}
						</option>
					))}
				</CustomSelect>
				<CustomSelect
					id='courseId'
					label='Выберите курс'
					{...register('courseId')}
				>
					<CourseOptions />
				</CustomSelect>
				<CustomSelect
					id='physicalEducationId'
					label='Выберите группу по физкультуре'
					{...register('physicalEducationId')}
				>
					{physicalEducations?.map(({ id, name }) => (
						<option
							key={id}
							value={id}
						>
							{name}
						</option>
					))}
				</CustomSelect>
			</CustomModalForm>
		</div>
	) : (
		<div className={'border-b-2 flex justify-end py-4'}>
			<div className={'justify-start mr-5 text-blue-gray-900'}>
				<ul>
					<li>{user?.login}</li>
				</ul>
			</div>
		</div>
	)
}

export default Header
