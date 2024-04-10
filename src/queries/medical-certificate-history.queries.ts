import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

import { QUERY_KEYS } from '@/constants/enums'
import { deleteToast } from '@/constants/notification-toasts'

import {
	IMedicalCertificateHistory,
	TypeMedicalCertificateHistoryForm
} from '@/types/medical-certificate-history.types'

import { MedicalCertificateHistoryService } from '@/services/medical-certificate-history.service'

export const useCreateMedicalCertificateHistory = () => {
	const queryClient = new QueryClient()

	const { mutateAsync: create } = useMutation({
		mutationFn: async (data: TypeMedicalCertificateHistoryForm) => {
			const response = await MedicalCertificateHistoryService.create(data)
			return response.data
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.MEDICAL_CERTIFICATE_HISTORY]
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
		queryKey: [QUERY_KEYS.MEDICAL_CERTIFICATE_HISTORY, medicalCertificatesId],
		queryFn: async () => {
			const response: AxiosResponse<IMedicalCertificateHistory[]> =
				await MedicalCertificateHistoryService.getAll(medicalCertificatesId)
			return response.data
		}
	})
	return { certificates, isLoading, refetch }
}

export const useDeleteMedicalCertificateHistory = () => {
	const queryClient = new QueryClient()
	const { mutateAsync: remove, isPending } = useMutation({
		mutationFn: async (id: number | string) => {
			await MedicalCertificateHistoryService.delete(id)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.MEDICAL_CERTIFICATE_HISTORY]
			})
			deleteToast()
		}
	})
	return { remove, isPending }
}