import { Module } from '@nestjs/common'
import { PrismaService } from '@config/prisma.service'
import { MedicalCertificateController } from './medical-certificate.controller'
import { MedicalCertificateService } from './medical-certificate.service'

@Module({
	controllers: [MedicalCertificateController],
	providers: [MedicalCertificateService, PrismaService]
})
export class MedicalCertificateModule {}
