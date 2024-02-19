import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "@config/prisma.service";
import { formatISO } from "date-fns";
import { MedicalCertificateDto } from "./dto/medical-certificate.dto";

@Injectable()
export class MedicalCertificateService {
  constructor(private prisma: PrismaService) {
  }
  
  async create(dto: MedicalCertificateDto) {
    return this.prisma.medicalCertificate.create({
      data: {
        ...dto,
        startDate: formatISO(dto.startDate),
        finishDate: formatISO(dto.finishDate)
      }
    });
  }
  
  async getAll() {
    const medicalCertificates = await this.prisma.medicalCertificate.findMany();
    if (!medicalCertificates || medicalCertificates.length === 0)
      throw new NotFoundException("Медицинские справки не найдены!");
    return medicalCertificates;
  }
  
  async getById(id: number) {
    const medicalCertificate = await this.prisma.medicalCertificate.findUnique({
      where: { id: +id }
    });
    if (!medicalCertificate)
      throw new NotFoundException("Медицинская справка не найдена!");
    
    return medicalCertificate;
  }
  
  async update(id: number, dto: MedicalCertificateDto) {
    await this.getById(id);
    return this.prisma.medicalCertificate.update({
      where: { id: +id },
      data: {
        ...dto,
        startDate: formatISO(dto.startDate),
        finishDate: formatISO(dto.finishDate)
      }
    });
  }
  
  async delete(id: number) {
    await this.getById(id);
    await this.prisma.medicalCertificate.delete({ where: { id: +id } });
  }
}
