import { z } from 'zod'

export const loginValidationSchema = z.object({
	login: z
		.string()
		.min(5, { message: 'Минимум 5 символов' })
		.max(30, { message: 'Максимум 30 символов' }),
	password: z
		.string()
		.min(6, { message: 'Минимум 6 символов' })
		.max(40, { message: 'Максимум 40 символов' })
})

export const userValidationSchema = z.object({
	login: z
		.string()
		.min(5, { message: 'Минимум 5 символов' })
		.max(30, { message: 'Максимум 30 символов' }),
	password: z
		.string()
		.min(6, { message: 'Минимум 6 символов' })
		.max(40, { message: 'Максимум 40 символов' })
})

export const departmentValidationSchema = z.object({
	name: z
		.string()
		.min(4, { message: 'Минимум 4 символа' })
		.max(60, { message: 'Максимум 60 символов' })
})

export const groupValidationSchema = z.object({
	name: z
		.string()
		.min(5, { message: 'Минимум 5 символов' })
		.max(5, { message: 'Максимум 5 символов' }),
	courseId: z.string().optional()
})

export const healthGroupValidationSchema = z.object({
	name: z
		.string()
		.min(5, { message: 'Минимум 5 символов' })
		.max(15, { message: 'Максимум 15 символов' })
})

export const physicalEducationValidationSchema = z.object({
	name: z
		.string()
		.min(3, { message: 'Минимум 3 символа' })
		.max(16, { message: 'Максимум 16 символов' })
})

export const studentValidationSchema = z.object({
	surname: z
		.string()
		.min(3, { message: 'Минимум 3 символа' })
		.max(30, { message: 'Максимум 30 символов' }),
	name: z
		.string()
		.min(3, { message: 'Минимум 3 символа' })
		.max(30, { message: 'Максимум 30 символов' }),
	birthDate: z.string().optional(),
	groupId: z.string().optional()
})

export const medicalCertificateValidationSchema = z.object({
	startDate: z.string().datetime({ message: 'Обязательное поле' }),
	finishDate: z.string().datetime({ message: 'Обязательное поле' })
})
