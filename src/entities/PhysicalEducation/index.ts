import {
	useCreatePhysicalEducation,
	useDeletePhysicalEducation,
	useGetPhysicalEducation,
	useGetPhysicalEducations,
	useUpdatePhysicalEducation
} from './physical-education.queries'
import { PhysicalEducationService } from './physical-education.service'
import {
	IPhysicalEducation,
	TypePhysicalEducationForm
} from './physical-education.types'

export {
	PhysicalEducationService,
	useCreatePhysicalEducation,
	useDeletePhysicalEducation,
	useGetPhysicalEducation,
	useGetPhysicalEducations,
	useUpdatePhysicalEducation
}
export type { IPhysicalEducation, TypePhysicalEducationForm }
