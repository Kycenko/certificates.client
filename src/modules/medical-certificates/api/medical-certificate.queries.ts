import {QueryClient, useMutation, useQuery} from '@tanstack/react-query'
import {AxiosResponse} from 'axios'

import {MedicalCertificateService} from '@/modules/medical-certificates/api/medical-certificate.service.ts'
import {
    IMedicalCertificate,
    TypeMedicalCertificateForm
} from '@/modules/medical-certificates/types/medical-certificate.types.ts'
import {QUERY_KEYS} from '@/shared/constants/enums.ts'
import {createToast, deleteToast, editToast} from '@/shared/helpers/toasts.ts'

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

export const useGetMedicalCertificates = (
	page: number,
	limit: number,
	sortOrder: 'asc' | 'desc' = 'asc',
	department?: string,
	course?: string,
	group?: string
) => {
	const { data, isLoading, refetch } = useQuery({
		queryKey: [
			QUERY_KEYS.MEDICAL_CERTIFICATES,
			{ page, limit, sortOrder, department, course, group }
		],
		queryFn: async () => {
			const response: AxiosResponse<{
				data: IMedicalCertificate[]
				totalPages: number
				totalRecords: number
			}> = await MedicalCertificateService.getAll(
				page,
				limit,
				sortOrder,
				department,
				course,
				group
			)
			return response.data
		}
	})
	const certificates = data?.data || []
	const totalPages = data?.totalPages || 0
	const totalRecords = data?.totalRecords || 0

	return {
		certificates,
		totalPages,
		totalRecords,
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
