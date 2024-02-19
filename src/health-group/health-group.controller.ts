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
import { HealthGroupDto } from './dto/health-group.dto'
import { HealthGroupService } from './health-group.service'

@Controller('health-groups')
export class HealthGroupController {
	constructor(private readonly healthGroupService: HealthGroupService) {}

	@Post()
	@Auth('admin')
	@UsePipes(new ValidationPipe())
	async create(@Body() dto: HealthGroupDto) {
		return this.healthGroupService.create(dto)
	}

	@Get()
	@Auth('admin')
	async getAll() {
		return this.healthGroupService.getAll()
	}

	@Get(':id')
	@Auth('admin')
	async getById(@Param('id') id: number) {
		return this.healthGroupService.getById(id)
	}

	@Put(':id')
	@Auth('admin')
	@UsePipes(new ValidationPipe())
	async update(@Param('id') id: number, @Body() dto: HealthGroupDto) {
		return this.healthGroupService.update(id, dto)
	}

	@Delete(':id')
	@Auth('admin')
	async delete(@Param('id') id: number) {
		await this.healthGroupService.getById(id)
		await this.healthGroupService.delete(id)
	}
}
