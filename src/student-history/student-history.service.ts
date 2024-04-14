import { PrismaService } from '@config/prisma.service'
import { Injectable } from '@nestjs/common'
import { StudentHistoryDto } from './dto/student-history.dto'

@Injectable()
export class StudentHistoryService {
	constructor(private prisma: PrismaService) {}

	async create(dto: StudentHistoryDto) {
		return this.prisma.studentHistory.create({ data: dto })
	}

	async getById(studentId: number) {
		return this.prisma.studentHistory.findUnique({
			where: { studentId: studentId }
		})
	}
}
