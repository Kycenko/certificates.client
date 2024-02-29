import instance from '@shared/api/api.instance'

import { IGetStatisticsByStudentsCertificates } from './statistics.types'

export const StatisticService = {
	async getStatisticsByGroup() {
		return instance.get('/statistics/health-report')
	},

	async getStatisticsByStudentsCertificates(id: string | undefined) {
		return instance.get<IGetStatisticsByStudentsCertificates[]>(
			`/statistics/certificates-info/${id}`
		)
	},

	async getStatisticsByStudentsCertificatesWithDepartment(
		id: string | undefined
	) {
		return instance.get(`/statistics/certificates-with-department-info/${id}`)
	}
}
