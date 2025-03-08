import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

export class MedicalCertificateHistoryDto {
	@IsNumber()
	@IsNotEmpty()
	medicalCertificateId: number
	@IsString()
	@IsOptional()
	startDate: Date
	@IsString()
	@IsOptional()
	finishDate: Date
	@IsNumber()
	healthGroupId: number
	@IsNumber()
	physicalEducationId: number
}
