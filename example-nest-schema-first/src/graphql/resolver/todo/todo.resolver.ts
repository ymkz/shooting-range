import { Query, Resolver } from '@nestjs/graphql'
import { TodoResult } from '~/graphql/resolver/todo/todo.result'
import { TodoService } from '~/graphql/service/todo/todo.service'
import { Todo } from '~/schema'

@Resolver('Todo')
export class TodoResolver {
  constructor(private todoService: TodoService) {}

  @Query()
  async todos(): Promise<Todo[]> {
    const todoModels = await this.todoService.getAll()
    return todoModels.map(TodoResult.of)
  }
}
