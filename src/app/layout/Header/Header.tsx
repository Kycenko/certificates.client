import { useGetDepartments } from '@entities/Department'
import { useAuth } from '@shared/hooks'
import { CustomModalForm, CustomSelect } from '@shared/ui'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import Dropdown from './DropDown'

interface FormState {
	departmentId: number | string
}

const Header = () => {
	const navigate = useNavigate()
	const { user } = useAuth()
	const [isOpen, setIsOpen] = useState(false)
	const [isOpen1, setIsOpen1] = useState(false)
	const { departments } = useGetDepartments()
	const { handleSubmit, register } = useForm<FormState>()

	const onSubmit = (data: FormState) => {
		navigate(`/statistics/certificates-info/${data.departmentId}`)
	}
	const onSubmit1 = (data: FormState) => {
		navigate(
			`/statistics/certificates-with-department-info/${data.departmentId}`
		)
	}

	return user?.isAdmin ? (
		<div className={'border-b-2 flex justify-start py-4'}>
			<div className={'justify-start text-blue-gray-900'}>
				<ul className={'flex flex-row gap-2 cursor-pointer'}>
					<Dropdown>
						<li
							onClick={() => setIsOpen(true)}
							className='block px-4 py-2 text-sm  text-gray-700 hover:bg-gray-100'
						>
							Отчёт по справкам отделения
						</li>
						<li
							onClick={() => setIsOpen1(true)}
							className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
						>
							Отчёт по справкам с группами отделения
						</li>
						<li className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
							Option 3
						</li>
					</Dropdown>

					<li className={'flex items-center  hover:text-blue-500'}>
						Загрузить
					</li>
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
