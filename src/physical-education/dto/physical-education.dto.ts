import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator'

export class PhysicalEducationDto {
	@IsString()
	@IsNotEmpty({ message: 'Обязательное поле!' })
	@MinLength(3, { message: 'Минимум 3 символа' })
	@MaxLength(15, { message: 'Максимум 15 символов' })
	name: string
}
