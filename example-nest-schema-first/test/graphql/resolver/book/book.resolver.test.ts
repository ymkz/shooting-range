import { Test, TestingModule } from '@nestjs/testing'
import { BookArgs } from '~/graphql/resolver/book/book.args'
import { BookResolver } from '~/graphql/resolver/book/book.resolver'
import { BookResolverModule } from '~/graphql/resolver/book/book.resolver.module'
import { BookModel } from '~/graphql/service/book/book.model'
import { BookService } from '~/graphql/service/book/book.service'
import { BookServiceModule } from '~/graphql/service/book/book.service.module'
import { Book } from '~/schema'

describe('BookResolver', () => {
  let target: BookResolver
  let bookService: BookService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [BookResolverModule, BookServiceModule],
    }).compile()

    target = module.get<BookResolver>(BookResolver)
    bookService = module.get<BookService>(BookService)
  })

  describe('books', () => {
    test('Bookの配列を返却する', async () => {
      const bookModels = [
        new BookModel('b_1', 'book_title_1'),
        new BookModel('b_2', 'book_title_2'),
        new BookModel('b_3', 'book_title_3'),
      ]

      bookService.getAll = jest.fn().mockReturnValue(bookModels)

      const expected: Book[] = [
        { id: 'b_1', title: 'book_title_1' },
        { id: 'b_2', title: 'book_title_2' },
        { id: 'b_3', title: 'book_title_3' },
      ]

      const received = await target.books()

      expect(received).toStrictEqual(expected)
      expect(bookService.getAll).toHaveBeenCalledTimes(1)
    })
  })

  describe('book', () => {
    test('Bookを返却する', async () => {
      const bookArgs: BookArgs = { bookId: 'b_1' }
      const bookModel = new BookModel('b_1', 'book_title_1')

      bookService.getOne = jest.fn().mockReturnValue(bookModel)

      const expected: Book = { id: 'b_1', title: 'book_title_1' }

      const received = await target.book(bookArgs)

      expect(received).toStrictEqual(expected)
      expect(bookService.getOne).toHaveBeenCalledTimes(1)
    })
  })
})
