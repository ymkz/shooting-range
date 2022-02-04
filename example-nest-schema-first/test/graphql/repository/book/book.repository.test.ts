import { Test, TestingModule } from '@nestjs/testing'
import { BookEntity } from '~/graphql/repository/book/book.entity'
import { BookRepository } from '~/graphql/repository/book/book.repository'
import { BookRepositoryModule } from '~/graphql/repository/book/book.repository.module'

describe('BookRepository', () => {
  let target: BookRepository

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [BookRepositoryModule],
    }).compile()

    target = module.get<BookRepository>(BookRepository)
  })

  describe('getAll', () => {
    test('BookEntityの配列を返却する', async () => {
      const expected = [
        new BookEntity('b_1', 'book_title_1'),
        new BookEntity('b_2', 'book_title_2'),
        new BookEntity('b_3', 'book_title_3'),
      ]

      const received = await target.getAll()

      expect(received).toStrictEqual(expected)
    })
  })

  describe('getOne', () => {
    test('BookEntityを返却する', async () => {
      const expected = new BookEntity('b_1', 'book_title_1')

      const received = await target.getOne('b_1')

      expect(received).toStrictEqual(expected)
    })
  })
})
