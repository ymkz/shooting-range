import { Module } from '@nestjs/common'
import { TodoResolver } from '~/graphql/resolver/todo/todo.resolver'
import { TodoServiceModule } from '~/graphql/service/todo/todo.service.module'

@Module({
  imports: [TodoServiceModule],
  providers: [TodoResolver],
})
export class TodoResolverModule {}
