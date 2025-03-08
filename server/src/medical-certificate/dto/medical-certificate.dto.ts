import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class MedicalCertificateDto {
	@IsString()
	@IsNotEmpty({ message: 'Обязательное поле!' })
	startDate: Date
	@IsString()
	@IsNotEmpty({ message: 'Обязательное поле!' })
	finishDate: Date
	@IsNumber()
	@IsNotEmpty()
	studentId: number
	@IsNumber()
	@IsNotEmpty({ message: 'Обязательное поле!' })
	healthGroupId: number
	@IsNumber()
	@IsNotEmpty({ message: 'Обязательное поле!' })
	physicalEducationId: number
}
