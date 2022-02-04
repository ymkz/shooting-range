import { Module } from '@nestjs/common'
import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { HealthzController } from '~/controller/healthz.controller'
import { BookResolverModule } from '~/graphql/resolver/book/book.resolver.module'
import { TodoResolverModule } from '~/graphql/resolver/todo/todo.resolver.module'

const GraphQLModule = NestGraphQLModule.forRoot({
  debug: false,
  tracing: true,
  playground: true,
  typePaths: ['./src/graphql/schema/**/*.graphql'],
  definitions: {
    path: join(process.cwd(), 'src/schema.ts'),
    outputAs: 'class',
  },
})

@Module({
  controllers: [HealthzController],
  imports: [GraphQLModule, BookResolverModule, TodoResolverModule],
})
export class AppModule {}
