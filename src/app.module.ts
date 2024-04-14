import { AuthModule } from '@auth/auth.module'
import { PrismaService } from '@config/prisma.service'
import { CourseModule } from '@course/course.module'
import { DepartmentModule } from '@department/department.module'
import { GroupModule } from '@group/group.module'
import { HealthGroupModule } from '@health-group/health-group.module'
import { MedicalCertificateModule } from '@medical-certificate/medical-certificate.module'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PhysicalEducationModule } from '@physical-education/physical-education.module'
import { StatisticsModule } from '@statistics/statistics.module'
import { StudentModule } from '@student/student.module'
import { UserModule } from '@user/user.module'
import { MedicalCertificateHistoryModule } from './medical-certificate-history/medical-certificate-history.module';
import { StudentHistoryModule } from './student-history/student-history.module';
import { StudentHistoryModule } from './student-history/student-history.module';

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
		StatisticsModule,
		MedicalCertificateHistoryModule,
		StudentHistoryModule
	],
	controllers: [],
	providers: [PrismaService]
})
export class AppModule {}
