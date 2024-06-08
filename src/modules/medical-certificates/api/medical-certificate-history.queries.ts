import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

import { MedicalCertificateHistoryService } from '@/modules/medical-certificates/api/medical-certificate-history.service.ts'
import {
	IMedicalCertificateHistory,
	TypeMedicalCertificateHistoryForm
} from '@/modules/medical-certificates/types/medical-certificate-history.types.ts'

export const useCreateMedicalCertificateHistory = () => {
	const queryClient = new QueryClient()

	const { mutateAsync: create } = useMutation({
		mutationKey: ['create certificate-history'],
		mutationFn: async (data: TypeMedicalCertificateHistoryForm) => {
			const response = await MedicalCertificateHistoryService.create(data)
			return response.data
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['certificates-histories']
			})
		}
	})
	return { create }
}

export const useGetMedicalCertificateHistories = (
	medicalCertificatesId: string | undefined
) => {
	const {
		data: certificates,
		isLoading,
		refetch
	} = useQuery({
		queryKey: ['certificates-histories', medicalCertificatesId],
		queryFn: async () => {
			const response: AxiosResponse<IMedicalCertificateHistory[]> =
				await MedicalCertificateHistoryService.getAll(medicalCertificatesId)
			return response.data
		}
	})
	return { certificates, isLoading, refetch }
}
