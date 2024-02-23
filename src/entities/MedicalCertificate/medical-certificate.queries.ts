import {
	IMedicalCertificate,
	MedicalCertificateService,
	TypeMedicalCertificateForm
} from '.'
import { QUERY_KEYS, createToast, deleteToast, editToast } from '@shared/config'
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

export const useCreateMedicalCertificate = () => {
	const queryClient = new QueryClient()
	const { mutateAsync: create, isPending } = useMutation({
		mutationFn: async (data: TypeMedicalCertificateForm) => {
			const response = await MedicalCertificateService.create(data)
			return response.data
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.MEDICAL_CERTIFICATES]
			})
			createToast()
		}
	})
	return { create, isPending }
}

export const useGetMedicalCertificates = () => {
	const {
		data: certificates,
		isLoading,
		refetch
	} = useQuery({
		queryKey: [QUERY_KEYS.MEDICAL_CERTIFICATES],
		queryFn: async () => {
			const response: AxiosResponse<IMedicalCertificate[]> =
				await MedicalCertificateService.getAll()
			return response.data
		}
	})
	return {
		certificates,
		isLoading,
		refetch
	}
}

export const useGetMedicalCertificate = (id: string | undefined) => {
	const {
		data: certificate,
		isLoading,
		refetch
	} = useQuery({
		queryKey: [QUERY_KEYS.MEDICAL_CERTIFICATES, id],
		queryFn: async () => {
			const response: AxiosResponse<IMedicalCertificate> =
				await MedicalCertificateService.getById(id)
			return response.data
		}
	})
	return { certificate, isLoading, refetch }
}

export const useUpdateMedicalCertificate = () => {
	const queryClient = new QueryClient()
	const { mutateAsync: update, isPending } = useMutation<
		IMedicalCertificate | undefined,
		Error,
		{ id: number | string; data: TypeMedicalCertificateForm }
	>({
		mutationFn: async ({ id, data }) => {
			const response = await MedicalCertificateService.update(id, data)
			return response.data
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.MEDICAL_CERTIFICATES]
			})
			editToast()
		}
	})
	return { update, isPending }
}

export const useDeleteMedicalCertificate = () => {
	const queryClient = new QueryClient()
	const { mutateAsync: remove, isPending } = useMutation({
		mutationFn: async (id: number | string) => {
			await MedicalCertificateService.delete(id)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.MEDICAL_CERTIFICATES]
			})
			deleteToast()
		}
	})
	return { remove, isPending }
}
