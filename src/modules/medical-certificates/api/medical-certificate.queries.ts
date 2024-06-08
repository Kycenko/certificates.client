import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

import { MedicalCertificateService } from '@/modules/medical-certificates/api/medical-certificate.service.ts'
import {
	IMedicalCertificate,
	TypeMedicalCertificateForm
} from '@/modules/medical-certificates/types/medical-certificate.types.ts'
import { createToast, deleteToast, editToast } from '@/shared/helpers/toasts.ts'

export const useCreateMedicalCertificate = () => {
	const queryClient = new QueryClient()
	const { mutateAsync: create, isPending } = useMutation({
		mutationKey: ['create certificate'],
		mutationFn: async (data: TypeMedicalCertificateForm) => {
			const response = await MedicalCertificateService.create(data)
			return response.data
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['certificates']
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
	group?: string,
	startDate?: Date | string,
	finishDate?: Date | string
) => {
	const { data, isLoading, refetch } = useQuery({
		queryKey: [
			'certificates',
			{
				page,
				limit,
				sortOrder,
				department,
				course,
				group,
				startDate,
				finishDate
			}
		],
		queryFn: async () => {
			const response: AxiosResponse<any> =
				await MedicalCertificateService.getAll(
					page,
					limit,
					sortOrder,
					department,
					course,
					group,
					startDate,
					finishDate
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
		queryKey: ['certificate', id],
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
		mutationKey: ['update certificate'],
		mutationFn: async ({ id, data }) => {
			const response = await MedicalCertificateService.update(id, data)
			return response.data
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['certificates']
			})
			editToast()
		}
	})
	return { update, isPending }
}

export const useDeleteMedicalCertificate = () => {
	const queryClient = new QueryClient()
	const { mutateAsync: remove, isPending } = useMutation({
		mutationKey: ['delete certificate'],
		mutationFn: async (id: number | string) => {
			await MedicalCertificateService.delete(id)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['certificates']
			})
			deleteToast()
		}
	})
	return { remove, isPending }
}
