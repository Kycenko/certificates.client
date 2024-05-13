import { PrismaService } from '@config/prisma.service'
import { Module } from '@nestjs/common'
import { MedicalCertificateHistoryController } from './medical-certificate-history.controller'
import { MedicalCertificateHistoryService } from './medical-certificate-history.service'

@Module({
	controllers: [MedicalCertificateHistoryController],
	providers: [MedicalCertificateHistoryService, PrismaService]
})
export class MedicalCertificateHistoryModule {
}
