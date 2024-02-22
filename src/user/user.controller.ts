import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'

import { Auth } from '@auth/decorators/auth.decorator'
import { CurrentUser } from '@auth/decorators/user.decorator'
import { UserDto } from './dto/user.dto'
import { UserService } from './user.service'

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get()
	@Auth('admin')
	async getAll() {
		return this.userService.getAll()
	}

	@Get(':id')
	@Auth('admin')
	async getById(@Param('id') id: number) {
		return this.userService.getById(id)
	}

	@Get('profile/:id')
	@Auth()
	async getProfile(@CurrentUser('id') id: number) {
		return this.userService.getProfile(id)
	}

	@Patch(':id')
	@UsePipes(new ValidationPipe())
	@Auth('admin')
	async update(@Param('id') id: number, @Body() dto: UserDto) {
		return this.userService.update(id, dto)
	}

	@Delete(':id')
	@Auth('admin')
	async delete(@Param('id') id: number) {
		return this.userService.delete(id)
	}
}
