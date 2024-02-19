import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class StudentDto {
  @IsString()
  @IsNotEmpty({ message: "Обязательное поле!" })
  name: string;
  @IsString()
  @IsNotEmpty({ message: "Обязательное поле!" })
  surname: string;
  @IsString()
  @IsOptional()
  secondName: string;
  @IsString()
  @IsNotEmpty({ message: "Обязательное поле!" })
  birthDate: Date;
  @IsNumber()
  @IsOptional()
  groupId: number;
}
