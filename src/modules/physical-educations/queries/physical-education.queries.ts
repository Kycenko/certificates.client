import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

import {
	IPhysicalEducation,
	TypePhysicalEducationForm
} from '@/modules/physical-educations/types/physical-education.types.ts'

import { QUERY_KEYS } from '@/shared/constants/enums.ts'
import { createToast, deleteToast, editToast } from '@/shared/constants/toasts.ts'
import { PhysicalEducationService } from '@/modules/physical-educations/services/physical-education.service.ts'

export const useCreatePhysicalEducation = () => {
	const queryClient = new QueryClient()
	const { mutateAsync: create, isPending } = useMutation({
		mutationFn: async (data: TypePhysicalEducationForm) => {
			const response = await PhysicalEducationService.create(data)
			return response.data
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.PHYSICAL_EDUCATIONS]
			})
			createToast()
		}
	})
	return { create, isPending }
}

export const useGetPhysicalEducations = () => {
	const {
		data: physicalEducations,
		isLoading,
		refetch
	} = useQuery({
		queryKey: [QUERY_KEYS.PHYSICAL_EDUCATIONS],
		queryFn: async () => {
			const response: AxiosResponse<IPhysicalEducation[]> =
				await PhysicalEducationService.getAll()
			return response.data
		}
	})
	return { physicalEducations, isLoading, refetch }
}

export const useGetPhysicalEducation = (id: number | string) => {
	const { data: physicalEducation, isLoading } = useQuery({
		queryKey: [QUERY_KEYS.PHYSICAL_EDUCATIONS, id],
		queryFn: async () => {
			const response: AxiosResponse<IPhysicalEducation> =
				await PhysicalEducationService.getById(id)
			return response.data
		}
	})
	return { physicalEducation, isLoading }
}

export const useUpdatePhysicalEducation = () => {
	const queryClient = new QueryClient()
	const { mutateAsync: update, isPending } = useMutation<
		IPhysicalEducation | undefined,
		Error,
		{ id: number | string; data: TypePhysicalEducationForm }
	>({
		mutationFn: async ({ id, data }) => {
			const response = await PhysicalEducationService.update(id, data)
			return response.data
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.PHYSICAL_EDUCATIONS]
			})
			editToast()
		}
	})
	return { update, isPending }
}

export const useDeletePhysicalEducation = () => {
	const queryClient = new QueryClient()
	const { mutateAsync: remove } = useMutation({
		mutationFn: async (id: number | string) => {
			await PhysicalEducationService.delete(id)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.PHYSICAL_EDUCATIONS]
			})
			deleteToast()
		}
	})
	return { remove }
}
