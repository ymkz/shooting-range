import { Injectable } from '@nestjs/common'
import { TodoRepository } from '~/graphql/repository/todo/todo.repository'
import { TodoModel } from '~/graphql/service/todo/todo.model'

@Injectable()
export class TodoService {
  constructor(private todoRepository: TodoRepository) {}

  async getAll(): Promise<TodoModel[]> {
    const todoEntities = await this.todoRepository.getAll()
    const todoModels = todoEntities.map(TodoModel.fromEntity)
    return todoModels
  }
}
