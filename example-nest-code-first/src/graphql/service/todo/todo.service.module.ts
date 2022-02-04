import { Module } from '@nestjs/common'
import { TodoRepositoryModule } from '~/graphql/repository/todo/todo.repository.module'
import { TodoService } from '~/graphql/service/todo/todo.service'

@Module({
  imports: [TodoRepositoryModule],
  providers: [TodoService],
  exports: [TodoService],
})
export class TodoServiceModule {}
