import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { AuthService } from '@auth/auth.service'
import { AuthController } from '@auth/auth.controller'
import { PrismaService } from '@config/prisma.service'
import { JwtStrategy } from '@auth/strategies/jwt.strategy'
import { getJwtConfig } from '@config/jwt.config'

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
