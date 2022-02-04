import { Test, TestingModule } from '@nestjs/testing'
import { BookEntity } from '~/graphql/repository/book/book.entity'
import { BookRepository } from '~/graphql/repository/book/book.repository'
import { BookRepositoryModule } from '~/graphql/repository/book/book.repository.module'
import { BookModel } from '~/graphql/service/book/book.model'
import { BookService } from '~/graphql/service/book/book.service'
import { BookServiceModule } from '~/graphql/service/book/book.service.module'

describe('BookService', () => {
  let target: BookService
  let bookRepository: BookRepository

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [BookServiceModule, BookRepositoryModule],
    }).compile()

    target = module.get<BookService>(BookService)
    bookRepository = module.get<BookRepository>(BookRepository)
  })

  describe('getAll', () => {
    test('BookModelの配列を返却する', async () => {
      const bookEntities = [
        new BookEntity('b_1', 'book_title_1'),
        new BookEntity('b_2', 'book_title_2'),
        new BookEntity('b_3', 'book_title_3'),
      ]

      bookRepository.getAll = jest.fn().mockReturnValue(bookEntities)

      const expected = [
        new BookModel('b_1', 'book_title_1'),
        new BookModel('b_2', 'book_title_2'),
        new BookModel('b_3', 'book_title_3'),
      ]

      const received = await target.getAll()

      expect(received).toStrictEqual(expected)
      expect(bookRepository.getAll).toHaveBeenCalledTimes(1)
    })
  })

  describe('getOne', () => {
    test('BookModelを返却する', async () => {
      const bookEntity = new BookEntity('b_1', 'book_title_1')

      bookRepository.getOne = jest.fn().mockReturnValue(bookEntity)

      const expected = new BookModel('b_1', 'book_title_1')

      const received = await target.getOne('b_1')

      expect(received).toStrictEqual(expected)
      expect(bookRepository.getOne).toHaveBeenCalledTimes(1)
      expect(bookRepository.getOne).toHaveBeenCalledWith('b_1')
    })
  })
})
