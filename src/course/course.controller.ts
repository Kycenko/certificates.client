import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { CourseService } from './course.service'

import { Auth } from '@auth/decorators/auth.decorator'
import { CourseDto } from './dto/course.dto'

@Controller('courses')
export class CourseController {
	constructor(private readonly courseService: CourseService) {}

	@Post()
	@Auth('admin')
	@UsePipes(new ValidationPipe())
	async create(@Body() dto: CourseDto) {
		return this.courseService.create(dto)
	}

	@Get()
	@Auth()
	async getAll() {
		return this.courseService.getAll()
	}

	@Get(':id')
	@Auth()
	async getById(@Param('id') id: number) {
		return this.courseService.getById(id)
	}

	@Put(':id')
	@Auth('admin')
	@UsePipes(new ValidationPipe())
	async update(@Param('id') id: number, @Body() dto: CourseDto) {
		return this.courseService.update(id, dto)
	}

	@Delete(':id')
	@Auth('admin')
	async delete(@Param('id') id: number) {
		await this.courseService.getById(id)
		await this.courseService.delete(id)
	}
}
