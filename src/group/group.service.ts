import { PrismaService } from '@config/prisma.service'
import { Injectable, NotFoundException } from '@nestjs/common'
import { GroupDto } from './dto/group.dto'

@Injectable()
export class GroupService {
	constructor(private prisma: PrismaService) {}

	async create(dto: GroupDto) {
		return this.prisma.group.create({
			data: dto
		})
	}

	async getAll(course?: number, sortOrder: 'asc' | 'desc' = 'asc') {
		const whereCourse = course
			? {
					course: {
						number: +course
					}
				}
			: {}
		const groups = await this.prisma.group.findMany({
			orderBy: {
				name: sortOrder
			},
			where: whereCourse,
			include: {
				students: {
					include: {
						medicalCertificates: true
					}
				},
				course: true
			}
		})
		if (!groups || groups.length === 0)
			throw new NotFoundException('Группы не найдены!')
		return groups
	}

	async getById(id: number) {
		const group = await this.prisma.group.findUnique({
			where: { id: +id },
			include: {
				students: {
					where: {
						groupId: +id
					},
					include: {
						medicalCertificates: true
					}
				}
			}
		})
		if (!group) throw new NotFoundException('Группа не найдена!')

		return group
	}

	async update(id: number, dto: GroupDto) {
		await this.getById(id)
		return this.prisma.group.update({
			where: { id: +id },
			data: dto
		})
	}

	async delete(id: number) {
		await this.getById(id)
		await this.prisma.group.delete({ where: { id: +id } })
	}
}
