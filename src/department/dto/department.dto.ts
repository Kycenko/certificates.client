import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator'

export class DepartmentDto {
	@IsString()
	@IsNotEmpty({ message: 'Обязательное поле!' })
	@MinLength(3, { message: 'Минимум 3 символа!' })
	@MaxLength(60, { message: 'Максимум 60 символов!' })
	name: string
}
