import { QUERY_KEYS } from '@shared/config/enums.ts'
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { MedicalCertificateService } from './medical-certificate.service'
import { IMedicalCertificate, TypeMedicalCertificateForm } from './medical-certificate.types'
import toast from 'react-hot-toast'


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
			toast.success('Справка успешно создана')
		}
	})
	return { create, isPending }
}

export const useGetMedicalCertificates = () => {
	const { data: certificates, isLoading } = useQuery({
		queryKey: [QUERY_KEYS.MEDICAL_CERTIFICATES],
		queryFn: async () => {
			const response: AxiosResponse<IMedicalCertificate[]> =
				await MedicalCertificateService.getAll()
			return response.data
		}
	})
	return {
		certificates, isLoading
	}
}

export const useGetMedicalCertificate = (id: string | undefined) => {
	const {
		data: certificate, isLoading
	} = useQuery({
		queryKey: [QUERY_KEYS.MEDICAL_CERTIFICATES, id],
		queryFn: async () => {
			const response: AxiosResponse<IMedicalCertificate> =
				await MedicalCertificateService.getById(id)
			return response.data
		}
	})
	return { certificate, isLoading }
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
			toast.success('Справка успешно обновлена')
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
			toast.success('Справка успешно удалена')
		}
	})
	return { remove, isPending }
}
