import { IsNotEmpty, IsString } from 'class-validator'

export class HealthGroupDto {
	@IsString()
	@IsNotEmpty({ message: 'Обязательное поле!' })
	name: string
}
