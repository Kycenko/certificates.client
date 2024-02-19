import { PrismaService } from '@config/prisma.service'
import { Injectable, NotFoundException } from '@nestjs/common'
import { DepartmentDto } from './dto/department.dto'

@Injectable()
export class DepartmentService {
	constructor(private prisma: PrismaService) {}

	async create(dto: DepartmentDto) {
		return this.prisma.department.create({
			data: dto
		})
	}

	async getAll() {
		const departments = await this.prisma.department.findMany({
			include: {
				Course: {
					include: {
						groups: true
					}
				}
			}
		})
		if (!departments || departments.length === 0)
			throw new NotFoundException('Отделения не найдены!')
		return departments
	}

	async getById(id: number) {
		const department = await this.prisma.department.findUnique({
			where: { id: +id },
			include: {
				Course: {
					where: {
						departmentId: +id
					},
					include: {
						groups: true
					}
				}
			}
		})
		if (!department) throw new NotFoundException('Отделение не найдено!')

		return department
	}

	async update(id: number, dto: DepartmentDto) {
		await this.getById(id)
		return this.prisma.department.update({
			where: { id: +id },
			data: dto
		})
	}

	async delete(id: number) {
		await this.getById(id)
		await this.prisma.department.delete({ where: { id: +id } })
	}
}
