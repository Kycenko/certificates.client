import { IsNotEmpty, IsString } from "class-validator";

export class PhysicalEducationDto {
  @IsString()
  @IsNotEmpty({ message: "Обязательное поле!" })
  name: string;
}
