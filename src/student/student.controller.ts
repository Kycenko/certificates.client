import { Auth } from '@auth/decorators/auth.decorator'
import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	Query,
	UploadedFile,
	UseInterceptors,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { StudentDto } from './dto/student.dto'
import { StudentService } from './student.service'

@Controller('students')
export class StudentController {
	constructor(private readonly studentService: StudentService) {}

	@Post('import')
	@Auth('admin')
	@UseInterceptors(FileInterceptor('file'))
	async importStudents(@UploadedFile() file: Express.Multer.File) {
		return this.studentService.importStudents(file)
	}

	@Post()
	@Auth('admin')
	@UsePipes(new ValidationPipe())
	async create(@Body() dto: StudentDto) {
		return this.studentService.create(dto)
	}

	@Get()
	@Auth()
	async getAll(
		@Query('page') page: number = 1,
		@Query('limit') limit: number = 100,
		@Query('sort') sortOrder: 'asc' | 'desc' = 'asc',
		@Query('department') department?: string,
		@Query('course') course?: number,
		@Query('group') group?: string,
		@Query('isExpelled') isExpelled?: string
	) {
		return this.studentService.getAll(
			page,
			limit,
			sortOrder,
			department,
			course,
			group,
			isExpelled
		)
	}

	@Get(':id')
	@Auth()
	async getById(@Param('id') id: number) {
		return this.studentService.getById(id)
	}

	@Patch(':id')
	@Auth('admin')
	@UsePipes(new ValidationPipe())
	async update(@Param('id') id: number, @Body() dto: StudentDto) {
		return this.studentService.update(id, dto)
	}

	@Delete(':id')
	@Auth('admin')
	async delete(@Param('id') id: number) {
		await this.studentService.getById(id)
		await this.studentService.delete(id)
	}
}
