import { PrismaService } from '@config/prisma.service'
import { Injectable, NotFoundException } from '@nestjs/common'
import { hash } from 'argon2'
import { UserDto } from './dto/user.dto'

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {
	}

	async getAll() {
		const users = await this.prisma.user.findMany({
			orderBy: {
				login: 'asc'
			},
			include: {
				group: true
			}
		})
		if (!users || users.length === 0)
			throw new NotFoundException('Пользователи не найдены!')
		return users
	}

	async getById(id: number) {
		const user = await this.prisma.user.findUnique({
			where: { id: +id }
		})
		if (!user) throw new NotFoundException('Пользователь не найден!')

		return user
	}

	// async getProfile(id: number) {
	// 	const profile = await this.getById(id)
	// 	return profile
	// }

	async update(id: number, dto: UserDto) {
		const user = await this.getById(id)

		return this.prisma.user.update({
			where: { id: +id },

			data: {
				login: dto.login,
				password: dto.password ? await hash(dto.password) : user.password,
				isAdmin: dto.isAdmin,
				groupId: dto.groupId
			}
		})
	}

	async delete(id: number) {
		await this.getById(id)
		await this.prisma.user.delete({ where: { id: +id } })
	}
}
