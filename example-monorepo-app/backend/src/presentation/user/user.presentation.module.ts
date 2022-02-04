import { Module } from '@nestjs/common'
import { UserApplicationModule } from '~/application/user/user.application.module'
import { UserResolver } from '~/presentation/user/user.resolver'

@Module({
  imports: [UserApplicationModule],
  providers: [UserResolver],
})
export class UserPresentationModule {}
