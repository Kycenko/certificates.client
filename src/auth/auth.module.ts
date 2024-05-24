import { AuthController } from '@auth/auth.controller'
import { AuthService } from '@auth/auth.service'
import { JwtStrategy } from '@auth/strategies/jwt.strategy'
import { getJwtConfig } from '@config/jwt.config'
import { PrismaService } from '@config/prisma.service'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'

@Module({
	controllers: [AuthController],
	providers: [AuthService, PrismaService, JwtStrategy],
	imports: [
		ConfigModule,
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getJwtConfig
		})
	]
})
export class AuthModule {}
