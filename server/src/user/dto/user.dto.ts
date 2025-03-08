import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from 'class-validator'

export class UserDto {
	@IsString()
	@IsNotEmpty({ message: 'Обязательное поле!' })
	@MinLength(5, { message: 'Минимум 5 символов' })
	@MaxLength(30, { message: 'Максимум 3 символов' })
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
