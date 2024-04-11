import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	Query,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { MedicalCertificateService } from './medical-certificate.service'

import { Auth } from '@auth/decorators/auth.decorator'
import { MedicalCertificateDto } from './dto/medical-certificate.dto'

@Controller('medical-certificates')
export class MedicalCertificateController {
	constructor(
		private readonly medicalCertificateService: MedicalCertificateService
	) {}

	@Post()
	@Auth('admin')
	@UsePipes(new ValidationPipe())
	async create(@Body() dto: MedicalCertificateDto) {
		return this.medicalCertificateService.create(dto)
	}

	@Get()
	@Auth('admin')
	async getAll(@Query('group') groupName?: string) {
		return this.medicalCertificateService.getAll(groupName)
	}

	@Get(':id')
	@Auth('admin')
	async getById(@Param('id') id: number) {
		return this.medicalCertificateService.getById(id)
	}

	@Patch(':id')
	@Auth('admin')
	@UsePipes(new ValidationPipe())
	async update(@Param('id') id: number, @Body() dto: MedicalCertificateDto) {
		return this.medicalCertificateService.update(id, dto)
	}

	@Delete(':id')
	@Auth('admin')
	async delete(@Param('id') id: number) {
		await this.medicalCertificateService.getById(id)
		await this.medicalCertificateService.delete(id)
	}
}
