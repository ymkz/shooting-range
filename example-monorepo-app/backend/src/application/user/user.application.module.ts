import { Module } from '@nestjs/common'
import { UserService } from '~/application/user/user.service'
import { UserInfrastructureModule } from '~/infrastructure/user/user.infrastructure.module'

@Module({
  imports: [UserInfrastructureModule],
  providers: [UserService],
  exports: [UserService],
})
export class UserApplicationModule {}
