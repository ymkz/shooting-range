import { Logger, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify'
import { AppModule } from '~/app.module'

async function bootstrap() {
  const port = process.env.PORT || 3000

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  )

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
