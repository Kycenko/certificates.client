import { Injectable, NotFoundException } from '@nestjs/common'

import { PrismaService } from '@config/prisma.service'
import { CourseDto } from './dto/course.dto'

@Injectable()
export class CourseService {
	constructor(private prisma: PrismaService) {}

	async create(dto: CourseDto) {
		return await this.prisma.course.create({
			data: dto
		})
	}

	async getAll(departmentName?: string, sortOrder: 'asc' | 'desc' = 'asc') {
		// const whereDepartment = departmentName
		// 	? {
		// 			department: {
		// 				name: departmentName
		// 			}
		// 		}
		// 	: {}
		const courses = await this.prisma.course.findMany({
			where: {
				department: {
					name: departmentName || undefined
				}
			},
			orderBy: {
				number: sortOrder
			},
			select: {
				id: true,
				number: true,
				groups: {
					select: {
						students: {
							select: {
								surname: true,
								name: true,
								secondName: true,
								birthDate: true
							}
						}
					}
				},
				department: {
					select: {
						name: true
					}
				}
			}
		})

		if (!courses || courses.length === 0)
			throw new NotFoundException('Курсы не найдены!')
		return courses
	}

	async getById(id: number) {
		const course = await this.prisma.course.findUnique({
			where: { id: +id },
			include: {
				groups: {
					orderBy: {
						name: 'asc'
					},
					where: {
						courseId: +id
					},
					include: {
						students: true
					}
				}
			}
		})
		if (!course) throw new NotFoundException('Курс не найден!')

		return course
	}

	async update(id: number, dto: CourseDto) {
		await this.getById(id)
		return await this.prisma.course.update({
			where: { id: +id },
			data: dto
		})
	}

	async delete(id: number) {
		await this.getById(id)
		await this.prisma.course.delete({ where: { id: +id } })
	}
}
