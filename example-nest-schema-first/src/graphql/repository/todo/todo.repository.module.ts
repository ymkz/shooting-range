import { Module } from '@nestjs/common'
import { TodoRepository } from '~/graphql/repository/todo/todo.repository'

@Module({
  providers: [TodoRepository],
  exports: [TodoRepository],
})
export class TodoRepositoryModule {}
