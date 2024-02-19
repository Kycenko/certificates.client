import { Module } from "@nestjs/common";
import { PrismaService } from "@config/prisma.service";
import { PhysicalEducationController } from "./physical-education.controller";
import { PhysicalEducationService } from "./physical-education.service";

@Module({
  controllers: [PhysicalEducationController],
  providers: [PhysicalEducationService, PrismaService]
})
export class PhysicalEducationModule {
}
