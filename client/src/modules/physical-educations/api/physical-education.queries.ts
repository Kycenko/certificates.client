import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

import { PhysicalEducationService } from '@/modules/physical-educations/api/physical-education.service.ts'
import {
	IPhysicalEducation,
	TypePhysicalEducationForm
} from '@/modules/physical-educations/types/physical-education.types.ts'
import { createToast, deleteToast, editToast } from '@/shared/helpers/toasts.ts'

export const useCreatePhysicalEducation = () => {
	const queryClient = new QueryClient()
	const { mutateAsync: create, isPending } = useMutation({
		mutationKey: ['create physical-education'],
		mutationFn: async (data: TypePhysicalEducationForm) => {
			const response = await PhysicalEducationService.create(data)
			return response.data
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['physical-educations']
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
		queryKey: ['physical-educations'],
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
		queryKey: ['physical-education', id],
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
		mutationKey: ['update physical-education'],
		mutationFn: async ({ id, data }) => {
			const response = await PhysicalEducationService.update(id, data)
			return response.data
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['physical-educations']
			})
			editToast()
		}
	})
	return { update, isPending }
}

export const useDeletePhysicalEducation = () => {
	const queryClient = new QueryClient()
	const { mutateAsync: remove } = useMutation({
		mutationKey: ['delete physical-education'],
		mutationFn: async (id: number | string) => {
			await PhysicalEducationService.delete(id)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['physical-educations']
			})
			deleteToast()
		}
	})
	return { remove }
}
