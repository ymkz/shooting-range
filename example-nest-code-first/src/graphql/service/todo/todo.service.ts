import { Injectable, NotFoundException } from '@nestjs/common'
import { TodoRepository } from '~/graphql/repository/todo/todo.repository'
import { TodoCreateInput } from '~/graphql/resolver/todo/input/todo-create.input'
import { TodoDeleteInput } from '~/graphql/resolver/todo/input/todo-delete.input'
import { TodoUpdateInput } from '~/graphql/resolver/todo/input/todo-update.input'
import { TodoResult } from '~/graphql/resolver/todo/result/todo.result'
import { TodosResult } from '~/graphql/resolver/todo/result/todos.result'
import { ErrorCode } from '~/helper/error-code'
import { nanoid } from '~/helper/id'

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async search(limit: number, offset: number): Promise<TodosResult> {
    const { result, total } = await this.todoRepository.findMany({
      skip: offset,
      take: limit,
    })

    return TodosResult.from(result, total)
  }

  async find(id: string): Promise<TodoResult> {
    const result = await this.todoRepository.findOne({ where: { id } })

    if (!result) {
      throw new NotFoundException({
        code: ErrorCode.E_TODO_NOT_FOUND,
        message: `Todo is not found. id:${id}`,
      })
    }

    return TodoResult.from(result)
  }

  async create(data: TodoCreateInput): Promise<TodoResult> {
    const result = await this.todoRepository.createOne({
      id: nanoid(),
      title: data.title,
    })
    return result
  }

  async update(data: TodoUpdateInput): Promise<TodoResult> {
    const result = await this.todoRepository.updateOne(data.id, {
      id: data.id,
      title: data.title,
    })
    return result
  }

  async delete(data: TodoDeleteInput): Promise<TodoResult> {
    const result = await this.todoRepository.deleteOne(data.id)
    return result
  }
}
