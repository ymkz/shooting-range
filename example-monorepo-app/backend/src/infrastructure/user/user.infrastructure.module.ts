import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { UserRepository } from '~/infrastructure/user/user.repository'

@Module({
  imports: [HttpModule],
  providers: [UserRepository],
  exports: [UserRepository],
})
export class UserInfrastructureModule {}
