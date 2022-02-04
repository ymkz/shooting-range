import { Test, TestingModule } from '@nestjs/testing'
import { TodoResolver } from '~/graphql/resolver/todo/todo.resolver'
import { TodoResolverModule } from '~/graphql/resolver/todo/todo.resolver.module'
import { TodoModel } from '~/graphql/service/todo/todo.model'
import { TodoService } from '~/graphql/service/todo/todo.service'
import { TodoServiceModule } from '~/graphql/service/todo/todo.service.module'
import { Todo } from '~/schema'

describe('TodoResolver', () => {
  let target: TodoResolver
  let todoService: TodoService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TodoResolverModule, TodoServiceModule],
    }).compile()

    target = module.get<TodoResolver>(TodoResolver)
    todoService = module.get<TodoService>(TodoService)
  })

  describe('todos', () => {
    test('Todoの配列を返却する', async () => {
      const todoModels = [
        new TodoModel(1, 1, 'title1', false),
        new TodoModel(1, 2, 'title2', true),
      ]

      todoService.getAll = jest.fn().mockReturnValue(todoModels)

      const expected: Todo[] = [
        { userId: 1, id: 1, title: 'title1', completed: false },
        { userId: 1, id: 2, title: 'title2', completed: true },
      ]

      const received = await target.todos()

      expect(received).toStrictEqual(expected)
      expect(todoService.getAll).toHaveBeenCalledTimes(1)
    })
  })
})
