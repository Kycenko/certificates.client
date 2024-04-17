import { Auth } from '@auth/decorators/auth.decorator'
import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { StudentHistoryDto } from './dto/student-history.dto'
import { StudentHistoryService } from './student-history.service'

@Controller('student-history')
export class StudentHistoryController {
	constructor(private readonly studentHistoryService: StudentHistoryService) {}

	@Post()
	@UsePipes(new ValidationPipe())
	@Auth('admin')
	async create(@Body() dto: StudentHistoryDto) {
		return this.studentHistoryService.create(dto)
	}

	@Get(':studentId')
	@Auth('admin')
	async getAll(@Param('studentId') studentId: number) {
		return this.studentHistoryService.getAll(studentId)
	}
	@Auth('admin')
	@Delete(':id')
	async delete(id: number) {
		return this.studentHistoryService.delete(id)
	}
}
