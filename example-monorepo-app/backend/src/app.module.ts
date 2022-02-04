import { Module } from '@nestjs/common'
import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql'
import { HealthzController } from '~/presentation/healthz/healthz.controller'
import { UserPresentationModule } from '~/presentation/user/user.presentation.module'

const GraphQLModule = NestGraphQLModule.forRoot({
  typePaths: ['../core/schema/**/*.gql'],
})

@Module({
  controllers: [HealthzController],
  imports: [GraphQLModule, UserPresentationModule],
})
export class AppModule {}
