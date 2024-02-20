import {
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString,
	MaxLength,
	MinLength
} from 'class-validator'

export class GroupDto {
	@IsString()
	@IsNotEmpty({ message: 'Обязательное поле!' })
	@MinLength(5, { message: 'Минимум 5 символов!' })
	@MaxLength(5, { message: 'Максимум 5 символов!' })
	name: string
	@IsNumber()
	@IsNotEmpty({ message: 'Обязательное поле!' })
	courseId: number
	@IsOptional()
	@IsNumber()
	userId: number
}
