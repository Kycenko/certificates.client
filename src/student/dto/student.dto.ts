import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from 'class-validator'

export class StudentDto {
	@IsString()
	@IsNotEmpty({ message: 'Обязательное поле!' })
	@MinLength(3, { message: 'Минимум 3 символа' })
	@MaxLength(30, { message: 'Максимум 30 символов' })
	name: string
	@IsString()
	@IsNotEmpty({ message: 'Обязательное поле!' })
	@MinLength(3, { message: 'Минимум 3 символа' })
	@MaxLength(30, { message: 'Максимум 30 символов' })
	surname: string
	@IsString()
	@IsOptional()
	secondName: string
	@IsString()
	@IsString()
	@IsNotEmpty({ message: 'Обязательное поле!' })
	birthDate: Date
	@IsNumber()
	@IsOptional()
	groupId: number
	@IsBoolean()
	@IsOptional()
	isExpelled?: boolean
}
