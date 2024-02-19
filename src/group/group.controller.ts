import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { Auth } from "@auth/decorators/auth.decorator";
import { GroupDto } from "./dto/group.dto";
import { GroupService } from "./group.service";

@Controller("groups")
export class GroupController {
  constructor(private readonly groupService: GroupService) {
  }
  
  @Post()
  @Auth()
  @UsePipes(new ValidationPipe())
  async create(@Body() dto: GroupDto) {
    return this.groupService.create(dto);
  }
  
  @Get()
  @Auth("admin")
  async getAll() {
    return this.groupService.getAll();
  }
  
  @Get(":id")
  @Auth("admin")
  async getById(@Param("id") id: number) {
    return this.groupService.getById(id);
  }
  
  @Put(":id")
  @Auth("admin")
  @UsePipes(new ValidationPipe())
  async update(@Param("id") id: number, @Body() dto: GroupDto) {
    return this.groupService.update(id, dto);
  }
  
  @Delete(":id")
  @Auth("admin")
  async delete(@Param("id") id: number) {
    await this.groupService.getById(id);
    await this.groupService.delete(id);
  }
}
