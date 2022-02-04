import { Injectable } from '@nestjs/common'
import { request } from 'gaxios'
import { TodoEntity } from '~/graphql/repository/todo/todo.entity'

@Injectable()
export class TodoRepository {
  public static readonly API_URL = 'https://jsonplaceholder.typicode.com/todos'

  async getAll(): Promise<TodoEntity[]> {
    const response = await request<TodoEntity[]>({
      url: `${TodoRepository.API_URL}?_start=0&_limit=5`,
    })
    return response.data
  }
}
