import { Injectable, NotFoundException } from '@nestjs/common'

import { PrismaService } from '@config/prisma.service'
import { HealthGroupDto } from './dto/health-group.dto'

@Injectable()
export class HealthGroupService {
	constructor(private prisma: PrismaService) {}

	async create(dto: HealthGroupDto) {
		return this.prisma.healthGroup.create({
			data: dto
		})
	}

	async getAll() {
		const healthGroups = await this.prisma.healthGroup.findMany()
		if (!healthGroups || healthGroups.length === 0)
			throw new NotFoundException('Группы здоровья не найдены!')
		return healthGroups
	}

	async getById(id: number) {
		const healthGroup = await this.prisma.healthGroup.findUnique({
			where: { id: +id }
		})
		if (!healthGroup) throw new NotFoundException('Группа здоровья не найдена!')

		return healthGroup
	}

	async update(id: number, dto: HealthGroupDto) {
		await this.getById(id)
		return this.prisma.healthGroup.update({
			where: { id: +id },
			data: dto
		})
	}

	async delete(id: number) {
		await this.getById(id)
		await this.prisma.healthGroup.delete({ where: { id: +id } })
	}
}
