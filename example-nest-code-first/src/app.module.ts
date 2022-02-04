import { Module } from '@nestjs/common'
import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql'
import { resolve } from 'path'
import { HealthzController } from '~/controller/healthz.controller'
import { BookResolverModule } from '~/graphql/resolver/book/book.resolver.module'
import { TodoResolverModule } from '~/graphql/resolver/todo/todo.resolver.module'

const GraphQLModule = NestGraphQLModule.forRoot({
  autoSchemaFile: resolve(process.cwd(), './src/graphql/schema.gql'),
  debug: false,
  tracing: true,
  playground: true,
  sortSchema: true,
})

@Module({
  controllers: [HealthzController],
  imports: [GraphQLModule, BookResolverModule, TodoResolverModule],
})
export class AppModule {}
