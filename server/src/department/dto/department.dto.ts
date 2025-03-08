import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator'

export class DepartmentDto {
	@IsString()
	@IsNotEmpty({ message: 'Обязательное поле!' })
	@MinLength(4, { message: 'Минимум 4 символа!' })
	@MaxLength(60, { message: 'Максимум 60 символов!' })
	name: string
}
