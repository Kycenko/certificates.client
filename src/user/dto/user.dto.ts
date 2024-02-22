import {
	IsBoolean,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString
} from 'class-validator'

export class UserDto {
	@IsString()
	@IsNotEmpty({ message: 'Обязательное поле!' })
	login: string

	@IsString()
	@IsOptional()
	password?: string

	@IsBoolean()
	@IsOptional()
	isAdmin?: boolean

	@IsNumber()
	@IsOptional()
	groupId?: number
}
