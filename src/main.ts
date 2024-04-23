import { NestFactory } from '@nestjs/core'
import * as compression from 'compression'
import { AppModule } from './app.module'
async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.enableCors({ credentials: true, origin: true })
	app.use(compression())

	await app.listen(7777)
}

bootstrap()
