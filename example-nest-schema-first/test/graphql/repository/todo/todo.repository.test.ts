import { Test, TestingModule } from '@nestjs/testing'
import * as gaxios from 'gaxios'
import { TodoEntity } from '~/graphql/repository/todo/todo.entity'
import { TodoRepository } from '~/graphql/repository/todo/todo.repository'
import { TodoRepositoryModule } from '~/graphql/repository/todo/todo.repository.module'

describe('TodoRepository', () => {
  let target: TodoRepository
  let spyGaxiosRequest: jest.SpyInstance<
    Promise<gaxios.GaxiosResponse<unknown>>
  >

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TodoRepositoryModule],
    }).compile()

    target = module.get<TodoRepository>(TodoRepository)

    spyGaxiosRequest = jest.spyOn(gaxios, 'request')
  })

  describe('getAll', () => {
    test('APIのリクエストに成功した場合はTodoEntityの配列を返却する', async () => {
      const data = [
        new TodoEntity(1, 1, 'title1', false),
        new TodoEntity(1, 2, 'title2', true),
      ]

      // @ts-ignore
      spyGaxiosRequest.mockResolvedValue({ data })

      const expected = [
        new TodoEntity(1, 1, 'title1', false),
        new TodoEntity(1, 2, 'title2', true),
      ]

      const received = await target.getAll()

      expect(received).toStrictEqual(expected)
      expect(spyGaxiosRequest).toHaveBeenCalledTimes(1)
      expect(spyGaxiosRequest).toHaveBeenCalledWith({
        url: `${TodoRepository.API_URL}?_start=0&_limit=5`,
      })
    })
  })
})
