import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator'

export class PhysicalEducationDto {
	@IsString()
	@IsNotEmpty({ message: 'Обязательное поле!' })
	@MinLength(5, { message: 'Минимум 5 символов' })
	@MaxLength(15, { message: 'Максимум 15 символов' })
	name: string
}
