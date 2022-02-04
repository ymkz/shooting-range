import { Test, TestingModule } from '@nestjs/testing'
import { TodoEntity } from '~/graphql/repository/todo/todo.entity'
import { TodoRepository } from '~/graphql/repository/todo/todo.repository'
import { TodoRepositoryModule } from '~/graphql/repository/todo/todo.repository.module'
import { TodoModel } from '~/graphql/service/todo/todo.model'
import { TodoService } from '~/graphql/service/todo/todo.service'
import { TodoServiceModule } from '~/graphql/service/todo/todo.service.module'

describe('TodoService', () => {
  let target: TodoService
  let todoRepository: TodoRepository

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TodoServiceModule, TodoRepositoryModule],
    }).compile()

    target = module.get<TodoService>(TodoService)
    todoRepository = module.get<TodoRepository>(TodoRepository)
  })

  describe('getAll', () => {
    test('TodoModelの配列を返却する', async () => {
      const todoEntities = [
        new TodoEntity(1, 1, 'title1', false),
        new TodoEntity(1, 2, 'title2', true),
      ]

      todoRepository.getAll = jest.fn().mockReturnValue(todoEntities)

      const expected = [
        new TodoModel(1, 1, 'title1', false),
        new TodoModel(1, 2, 'title2', true),
      ]

      const received = await target.getAll()

      expect(received).toStrictEqual(expected)
      expect(todoRepository.getAll).toHaveBeenCalledTimes(1)
    })
  })
})
