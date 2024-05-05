import { Auth } from '@auth/decorators/auth.decorator'
import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
	Query,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { GroupDto } from './dto/group.dto'
import { GroupService } from './group.service'

@Controller('groups')
export class GroupController {
	constructor(private readonly groupService: GroupService) {}

	@Post()
	@Auth()
	@UsePipes(new ValidationPipe())
	async create(@Body() dto: GroupDto) {
		return this.groupService.create(dto)
	}

	@Get()
	@Auth()
	async getAll(
		@Query('sort') sortOrder: 'asc' | 'desc' = 'asc',
		@Query('department') department?: string,
		@Query('course') course?: number
	) {
		return this.groupService.getAll(sortOrder, department, course)
	}

	@Get(':id')
	@Auth()
	async getById(@Param('id') id: number) {
		return this.groupService.getById(id)
	}

	@Put(':id')
	@Auth('admin')
	@UsePipes(new ValidationPipe())
	async update(@Param('id') id: number, @Body() dto: GroupDto) {
		return this.groupService.update(id, dto)
	}

	@Delete(':id')
	@Auth('admin')
	async delete(@Param('id') id: number) {
		await this.groupService.getById(id)
		await this.groupService.delete(id)
	}
}
