import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator'

export class StudentHistoryDto {
	@IsNumber()
	@IsNotEmpty()
	studentId: number
	@IsNumber()
	@IsOptional()
	groupId?: number
}
