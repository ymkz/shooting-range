import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify'
import { AppModule } from '~/app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  )
  await app.listen(3000, () => {
    Logger.debug(`Server is running on http://localhost:3000`)
    Logger.debug(`Healthcheck on http://localhost:3000/healthz`)
    Logger.debug(`GraphQL on http://localhost:3000/graphql`)
  })
}

bootstrap()
