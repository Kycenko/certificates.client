import { applyDecorators, UseGuards } from '@nestjs/common'
import { AdminGuard } from '../guards/admin.guard'
import { JWTAuthGuard } from '../guards/jwt.guard'

export type TypeRole = 'admin' | 'user'

export const Auth = (role: TypeRole = 'user') =>
	applyDecorators(
		role === 'admin'
			? UseGuards(JWTAuthGuard, AdminGuard)
			: UseGuards(JWTAuthGuard)
	)
