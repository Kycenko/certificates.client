import { PrismaService } from '@config/prisma.service'
import { Injectable } from '@nestjs/common'
import { StudentHistoryDto } from './dto/student-history.dto'

@Injectable()
export class StudentHistoryService {
	constructor(private prisma: PrismaService) {
	}

	async create(dto: StudentHistoryDto) {
		return this.prisma.studentHistory.create({
			data: {
				studentId: dto.studentId,
				groupId: dto.groupId
			}
		})
	}

	async getAll(studentId: number) {
		return this.prisma.studentHistory.findMany({
			where: { studentId: +studentId },
			include: {
				group: true,
				student: true
			}
		})
	}

	async delete(id: number) {
		return this.prisma.studentHistory.delete({ where: { id: +id } })
	}
}
