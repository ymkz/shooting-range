import { Injectable, NotFoundException } from '@nestjs/common'
import { BookRepository } from '~/graphql/repository/book/book.repository'
import { BookResult } from '~/graphql/resolver/book/result/book.result'
import { BooksResult } from '~/graphql/resolver/book/result/books.result'
import { ErrorCode } from '~/helper/error-code'

@Injectable()
export class BookService {
  constructor(private bookRepository: BookRepository) {}

  async search(): Promise<BooksResult> {
    const { result, total } = await this.bookRepository.findMany()

    return {
      nodes: result.map(BookResult.from),
      totalCount: total,
    }
  }

  async find(id: string): Promise<BookResult> {
    const result = await this.bookRepository.findOne(id)

    if (!result) {
      throw new NotFoundException({
        code: ErrorCode.E_BOOK_NOT_FOUND,
        message: `Book is not found. id:${id}`,
      })
    }

    return BookResult.from(result)
  }
}
