import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { Auth } from "@auth/decorators/auth.decorator";
import { PhysicalEducationDto } from "./dto/physical-education.dto";
import { PhysicalEducationService } from "./physical-education.service";

@Controller("physical-educations")
export class PhysicalEducationController {
  constructor(
    private readonly physicalEducationService: PhysicalEducationService
  ) {
  }
  
  @Post()
  @Auth("admin")
  @UsePipes(new ValidationPipe())
  async create(@Body() dto: PhysicalEducationDto) {
    return this.physicalEducationService.create(dto);
  }
  
  @Get()
  @Auth("admin")
  async getAll() {
    return this.physicalEducationService.getAll();
  }
  
  @Get(":id")
  @Auth("admin")
  async getById(@Param("id") id: number) {
    return this.physicalEducationService.getById(id);
  }
  
  @Put(":id")
  @Auth("admin")
  @UsePipes(new ValidationPipe())
  async update(@Param("id") id: number, @Body() dto: PhysicalEducationDto) {
    return this.physicalEducationService.update(id, dto);
  }
  
  @Delete(":id")
  @Auth("admin")
  async delete(@Param("id") id: number) {
    await this.physicalEducationService.getById(id);
    await this.physicalEducationService.delete(id);
  }
}
