import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // Préfixe global API
  app.setGlobalPrefix('api/v1')

  // Validation globale
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }))

  // CORS
  app.enableCors({
    origin: process.env.APP_URL || 'http://localhost:3000',
    credentials: true,
  })

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('CashCoin API')
    .setDescription('API E-commerce CashCoin')
    .setVersion('1.0')
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api/docs', app, document)

  await app.listen(process.env.PORT ?? 3001)
  console.log(`🚀 Server running on http://localhost:${process.env.PORT ?? 3001}`)
}

bootstrap()
