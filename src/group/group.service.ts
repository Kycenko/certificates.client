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

	async getAll(
		sortOrder: 'asc' | 'desc' = 'asc',
		department?: string,
		course?: number
	) {
		const groups = await this.prisma.group.findMany({
			orderBy: {
				name: sortOrder
			},
			where: {
				course: course
					? {
							number: +course,
							department: {
								name: department
							}
						}
					: {
							number: undefined,
							department: {
								name: department
							}
						}
			},
			select: {
				id: true,
				name: true,
				students: {
					select: {
						surname: true,
						secondName: true,
						name: true,
						birthDate: true,
						group: {
							select: {
								name: true,
								course: {
									select: {
										departmentId: true,
										number: true,
										department: {
											select: {
												name: true
											}
										}
									}
								}
							}
						}
					}
				},
				course: {
					select: {
						departmentId: true,
						number: true,
						department: {
							select: {
								name: true
							}
						}
					}
				}
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
					orderBy: {
						surname: 'asc'
					},
					where: {
						groupId: +id
					},
					include: {
						medicalCertificates: {
							orderBy: {
								startDate: 'desc'
							}
						}
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
			data: { ...dto, courseId: +dto.courseId }
		})
	}

	async delete(id: number) {
		await this.getById(id)
		await this.prisma.group.delete({ where: { id: +id } })
	}
}
