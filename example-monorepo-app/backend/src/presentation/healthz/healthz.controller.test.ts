import { Test, TestingModule } from '@nestjs/testing'
import { HealthzController } from '~/presentation/healthz/healthz.controller'

describe('HealthzController', () => {
  let target: HealthzController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HealthzController],
    }).compile()

    target = app.get<HealthzController>(HealthzController)
  })

  describe('healthz', () => {
    test('should return "OK"', () => {
      const received = target.healthz()
      expect(received).toBe('OK')
    })
  })
})
