import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { Auth } from "@auth/decorators/auth.decorator";
import { StudentDto } from "./dto/student.dto";
import { StudentService } from "./student.service";

@Controller("students")
export class StudentController {
  constructor(private readonly studentService: StudentService) {
  }
  
  @Post()
  @Auth("admin")
  @UsePipes(new ValidationPipe())
  async create(@Body() dto: StudentDto) {
    return this.studentService.create(dto);
  }
  
  @Get()
  @Auth("admin")
  async getAll() {
    return this.studentService.getAll();
  }
  
  @Get(":id")
  @Auth("admin")
  async getById(@Param("id") id: number) {
    return this.studentService.getById(id);
  }
  
  @Patch(":id")
  @Auth("admin")
  @UsePipes(new ValidationPipe())
  async update(@Param("id") id: number, @Body() dto: StudentDto) {
    return this.studentService.update(id, dto);
  }
  
  @Delete(":id")
  @Auth("admin")
  async delete(@Param("id") id: number) {
    await this.studentService.getById(id);
    await this.studentService.delete(id);
  }
}
