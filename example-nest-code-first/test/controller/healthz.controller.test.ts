import { Test, TestingModule } from '@nestjs/testing'
import { HealthzController } from '~/controller/healthz.controller'

describe('HealthzController', () => {
  let healthzController: HealthzController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HealthzController],
    }).compile()

    healthzController = app.get<HealthzController>(HealthzController)
  })

  describe('healthz', () => {
    test('should return "ok"', () => {
      expect(healthzController.healthz()).toBe('ok')
    })
  })
})
