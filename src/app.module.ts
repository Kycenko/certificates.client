import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { DepartmentModule } from '@department/department.module'
import { GroupModule } from '@group/group.module'
import { HealthGroupModule } from '@health-group/health-group.module'
import { PrismaService } from '@config/prisma.service'
import { StudentModule } from '@student/student.module'
import { UserModule } from '@user/user.module'
import { AuthModule } from '@auth/auth.module'
import { PhysicalEducationModule } from '@physical-education/physical-education.module'
import { MedicalCertificateModule } from '@medical-certificate/medical-certificate.module'
import { CourseModule } from '@course/course.module'
import { StatisticsModule } from '@statistics/statistics.module'

@Module({
	imports: [
		ConfigModule.forRoot(),
		UserModule,
		StudentModule,
		GroupModule,
		DepartmentModule,
		HealthGroupModule,
		AuthModule,
		PhysicalEducationModule,
		MedicalCertificateModule,
		CourseModule,
		StatisticsModule
	],
	controllers: [],
	providers: [PrismaService]
})
export class AppModule {
}
