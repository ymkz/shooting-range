import { Controller, Get, Header } from '@nestjs/common'

@Controller('healthz')
export class HealthzController {
  @Get()
  @Header('Cache-Control', 'none')
  healthz(): string {
    return 'ok'
  }
}
