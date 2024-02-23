import {
	useCreateDepartment,
	useDeleteDepartment,
	useGetDepartment,
	useGetDepartments,
	useUpdateDepartment
} from './department.queries'
import { DepartmentService } from './department.service'
import { IDepartment, TypeDepartmentForm } from './department.types'

export {
	DepartmentService,
	useCreateDepartment,
	useDeleteDepartment,
	useGetDepartment,
	useGetDepartments,
	useUpdateDepartment
}

export type { IDepartment, TypeDepartmentForm }
