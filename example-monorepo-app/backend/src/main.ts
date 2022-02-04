import { Logger, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from '~/app.module'

async function bootstrap() {
  const port = Number(process.env.PORT) || 4000

  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidUnknownValues: true,
      forbidNonWhitelisted: true,
    })
  )

  await app.listen(port, () => {
    Logger.debug(`Server is running on http://localhost:${port}`)
    Logger.debug(`Healthcheck on http://localhost:${port}/healthz`)
    Logger.debug(`GraphQL on http://localhost:${port}/graphql`)
  })
}

bootstrap()
