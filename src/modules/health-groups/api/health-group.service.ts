import {
	IHealthGroup,
	TypeHealthGroupForm
} from '@/modules/health-groups/types/health-group.types.ts'
import instance from '@/shared/api/api.instance.ts'
import { SERVICE_URL } from '@/shared/constants/enums.ts'

export const HealthGroupService = {
	async create(data: TypeHealthGroupForm) {
		return instance.post<IHealthGroup>(`${SERVICE_URL.HEALTH_GROUPS}`, data)
	},
	async getAll() {
		return instance.get<IHealthGroup[]>(`${SERVICE_URL.HEALTH_GROUPS}`)
	},

	async getById(id: string | number) {
		return instance.get<IHealthGroup>(`${SERVICE_URL.HEALTH_GROUPS}/${id}`)
	},

	async update(id: string | number, data: TypeHealthGroupForm) {
		return instance.put<IHealthGroup>(
			`${SERVICE_URL.HEALTH_GROUPS}/${id}`,
			data
		)
	},

	async delete(id: string | number) {
		return instance.delete<IHealthGroup>(`${SERVICE_URL.HEALTH_GROUPS}/${id}`)
	}
}
