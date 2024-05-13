import { PrismaService } from '@config/prisma.service'
import { Injectable, NotFoundException } from '@nestjs/common'
import { PhysicalEducationDto } from './dto/physical-education.dto'

@Injectable()
export class PhysicalEducationService {
	constructor(private prisma: PrismaService) {
	}

	async create(dto: PhysicalEducationDto) {
		return this.prisma.physicalEducation.create({
			data: dto
		})
	}

	async getAll() {
		const physicalEducations = await this.prisma.physicalEducation.findMany({
			orderBy: { name: 'asc' }
		})
		if (!physicalEducations || physicalEducations.length === 0)
			throw new NotFoundException('Группы по здоровью не найдены!')
		return physicalEducations
	}

	async getById(id: number) {
		const physicalEducation = await this.prisma.physicalEducation.findUnique({
			where: { id: +id }
		})
		if (!physicalEducation)
			throw new NotFoundException('Группа по физкультуре не найдена!')

		return physicalEducation
	}

	async update(id: number, dto: PhysicalEducationDto) {
		await this.getById(id)
		return this.prisma.physicalEducation.update({
			where: { id: +id },
			data: dto
		})
	}

	async delete(id: number) {
		await this.getById(id)
		await this.prisma.physicalEducation.delete({ where: { id: +id } })
	}
}
