import { Test, TestingModule } from '@nestjs/testing'
import { UserPresentationModule } from '~/presentation/user/user.presentation.module'
import { UserResolver } from '~/presentation/user/user.resolver'

describe('UserResolver', () => {
  let target: UserResolver

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [UserPresentationModule],
    }).compile()

    target = app.get<UserResolver>(UserResolver)
  })

  describe('users', () => {
    test('should return 2 length array', async () => {
      const received = await target.users()
      expect(received).toHaveLength(2)
    })
  })
})
