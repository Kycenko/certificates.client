import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator'

export class PhysicalEducationDto {
	@IsString()
	@IsNotEmpty({ message: 'Обязательное поле!' })
	@MinLength(3, { message: 'Минимум 3 символа' })
	@MaxLength(16, { message: 'Максимум 16 символов' })
	name: string
}
