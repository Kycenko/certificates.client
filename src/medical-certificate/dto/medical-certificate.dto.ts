import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

export class MedicalCertificateDto {
	@IsString()
	@IsNotEmpty({ message: 'Обязательное поле!' })
	startDate: Date
	@IsString()
	@IsNotEmpty({ message: 'Обязательное поле!' })
	finishDate: Date
	@IsNumber()
	@IsOptional()
	studentId: number
	@IsNumber()
	@IsNotEmpty({ message: 'Обязательное поле!' })
	healthGroupId: number
	@IsNumber()
	@IsNotEmpty({ message: 'Обязательное поле!' })
	physicalEducationId: number
}
