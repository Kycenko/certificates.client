import { Auth } from '@auth/decorators/auth.decorator'
import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { MedicalCertificateHistoryDto } from './dto/medical-certificate-history.dto'
import { MedicalCertificateHistoryService } from './medical-certificate-history.service'

@Controller('medical-certificate-history')
export class MedicalCertificateHistoryController {
	constructor(
		private readonly medicalCertificateHistoryService: MedicalCertificateHistoryService
	) {}

	@Post()
	@Auth('admin')
	@UsePipes(new ValidationPipe())
	async create(
		@Body()
		dto: MedicalCertificateHistoryDto
	) {
		return this.medicalCertificateHistoryService.create(dto)
	}

	@Get(':medicalCertificateId')
	@Auth('admin')
	async getAll(@Param('medicalCertificateId') medicalCertificateId: number) {
		return this.medicalCertificateHistoryService.getAll(medicalCertificateId)
	}

	@Delete(':id')
	@Auth('admin')
	async delete(@Param('id') id: number) {
		return this.medicalCertificateHistoryService.delete(id)
	}
}
