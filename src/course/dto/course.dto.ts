import { IsNotEmpty, IsNumber, IsOptional, Max, Min } from 'class-validator'

export class CourseDto {
	@IsNumber()
	@IsNotEmpty({ message: 'Обязательное поле!' })
	@Min(1, { message: 'Курс начинает от 1!' })
	@Max(4, { message: 'Курс заканчивается на 4!' })
	number: number

	@IsNumber()
	@IsOptional()
	departmentId: number
}
