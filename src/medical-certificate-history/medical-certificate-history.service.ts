import { PrismaService } from '@config/prisma.service'
import { Injectable } from '@nestjs/common'
import { formatISO } from 'date-fns'
import { MedicalCertificateHistoryDto } from './dto/medical-certificate-history.dto'

@Injectable()
export class MedicalCertificateHistoryService {
	constructor(private prisma: PrismaService) {
	}

	async create(dto: MedicalCertificateHistoryDto) {
		return this.prisma.medicalCertificateHistory.create({
			data: {
				...dto,
				startDate: formatISO(dto.startDate),
				finishDate: formatISO(dto.finishDate)
			}
		})
	}

	getAll(medicalCertificateId: number) {
		return this.prisma.medicalCertificateHistory.findMany({
			where: { medicalCertificateId: +medicalCertificateId },
			include: {
				healthGroup: {
					select: {
						name: true
					}
				},
				physicalEducation: {
					select: { name: true }
				}
			}
		})
	}

	async delete(id: number) {
		return this.prisma.medicalCertificateHistory.delete({
			where: { id: +id }
		})
	}
}
