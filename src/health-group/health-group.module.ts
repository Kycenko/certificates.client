import { Module } from "@nestjs/common";
import { PrismaService } from "@config/prisma.service";
import { HealthGroupController } from "./health-group.controller";
import { HealthGroupService } from "./health-group.service";

@Module({
  controllers: [HealthGroupController],
  providers: [HealthGroupService, PrismaService]
})
export class HealthGroupModule {
}
