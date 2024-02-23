import instance from '@shared/api/api.instance'

export const StatisticService = {
	async getStatisticsByGroup() {
		return instance.get('/statistics/health-report')
	},

	async getStatisticsByStudentCertificates(id: string | undefined) {
		return instance.get(`/statistics/certificates-info/${id}`)
	}
}
