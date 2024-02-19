import { instance } from '@shared/api'
import { SERVICE_URL } from '@shared/config/enums'
import {
	IPhysicalEducation,
	TypePhysicalEducationForm
} from './physical-education.types'

export const PhysicalEducationService = {
	async create(data: TypePhysicalEducationForm) {
		return instance.post<IPhysicalEducation>(
			`${SERVICE_URL.PHYSICAL_EDUCATIONS}`,
			data
		)
	},
	async getAll() {
		return instance.get<IPhysicalEducation[]>(
			`${SERVICE_URL.PHYSICAL_EDUCATIONS}`
		)
	},

	async getById(id: number | string) {
		return instance.get<IPhysicalEducation>(
			`${SERVICE_URL.PHYSICAL_EDUCATIONS}/${id}`
		)
	},

	async update(id: number | string, data: TypePhysicalEducationForm) {
		return instance.put<IPhysicalEducation>(
			`${SERVICE_URL.PHYSICAL_EDUCATIONS}/${id}`,
			data
		)
	},

	async delete(id: number | string) {
		return instance.delete<IPhysicalEducation>(
			`${SERVICE_URL.PHYSICAL_EDUCATIONS}/${id}`
		)
	}
}
