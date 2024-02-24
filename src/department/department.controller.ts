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

import { Auth } from '@auth/decorators/auth.decorator'
import { DepartmentService } from './department.service'
import { DepartmentDto } from './dto/department.dto'

@Controller('departments')
export class DepartmentController {
	constructor(private readonly departmentService: DepartmentService) {}

	@Post()
	@Auth('admin')
	@UsePipes(new ValidationPipe())
	async create(@Body() dto: DepartmentDto) {
		return this.departmentService.create(dto)
	}

	@Get()
	@Auth('admin')
	async getAll() {
		return this.departmentService.getAll()
	}

	@Get(':id')
	@Auth('admin')
	async getById(@Param('id') id: number) {
		return this.departmentService.getById(id)
	}

	@Put(':id')
	@Auth('admin')
	@UsePipes(new ValidationPipe())
	async update(@Param('id') id: number, @Body() dto: DepartmentDto) {
		return this.departmentService.update(id, dto)
	}

	@Delete(':id')
	@Auth('admin')
	async delete(@Param('id') id: number) {
		await this.departmentService.getById(id)
		await this.departmentService.delete(id)
	}
}
