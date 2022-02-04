import { Test, TestingModule } from '@nestjs/testing'
import { TodoRepository } from '~/graphql/repository/todo/todo.repository'
import { TodoRepositoryModule } from '~/graphql/repository/todo/todo.repository.module'

type PromiseType<T extends Promise<unknown>> = T extends Promise<infer P>
  ? P
  : never

describe('TodoRepository', () => {
  let target: TodoRepository

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TodoRepositoryModule],
    }).compile()

    target = module.get<TodoRepository>(TodoRepository)
  })

  describe('findMany', () => {
    test('PrismaTodoの取得結果の配列と総数を返却する', async () => {
      target.todo.findMany = jest.fn().mockResolvedValue([])
      target.todo.count = jest.fn().mockResolvedValue(0)

      const expected: PromiseType<ReturnType<typeof target.findMany>> = {
        result: [],
        total: 0,
      }

      const received = await target.findMany()

      expect(received).toStrictEqual(expected)
      expect(target.todo.findMany).toHaveBeenCalledTimes(1)
      expect(target.todo.count).toHaveBeenCalledTimes(1)
    })
  })
})
