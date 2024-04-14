import { Controller } from '@nestjs/common'
import { StudentHistoryService } from './student-history.service'

@Controller('student-history')
export class StudentHistoryController {
	constructor(private readonly studentHistoryService: StudentHistoryService) {}

	async getById(studentId: number) {
		return this.studentHistoryService.getById(studentId)
	}
}
