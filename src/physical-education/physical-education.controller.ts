import { Auth } from '@auth/decorators/auth.decorator'
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
import { PhysicalEducationDto } from './dto/physical-education.dto'
import { PhysicalEducationService } from './physical-education.service'

@Controller('physical-educations')
export class PhysicalEducationController {
	constructor(
		private readonly physicalEducationService: PhysicalEducationService
	) {}

	@Post()
	@Auth('admin')
	@UsePipes(new ValidationPipe())
	async create(@Body() dto: PhysicalEducationDto) {
		return this.physicalEducationService.create(dto)
	}

	@Get()
	@Auth()
	async getAll() {
		return this.physicalEducationService.getAll()
	}

	@Get(':id')
	@Auth()
	async getById(@Param('id') id: number) {
		return this.physicalEducationService.getById(id)
	}

	@Put(':id')
	@Auth('admin')
	@UsePipes(new ValidationPipe())
	async update(@Param('id') id: number, @Body() dto: PhysicalEducationDto) {
		return this.physicalEducationService.update(id, dto)
	}

	@Delete(':id')
	@Auth('admin')
	async delete(@Param('id') id: number) {
		await this.physicalEducationService.getById(id)
		await this.physicalEducationService.delete(id)
	}
}
