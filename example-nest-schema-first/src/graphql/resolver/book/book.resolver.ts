import { Args, Query, Resolver } from '@nestjs/graphql'
import { BookArgs } from '~/graphql/resolver/book/book.args'
import { BookResult } from '~/graphql/resolver/book/book.result'
import { BookService } from '~/graphql/service/book/book.service'
import { Book } from '~/schema'

@Resolver('Book')
export class BookResolver {
  constructor(private bookService: BookService) {}

  @Query()
  async books(): Promise<Book[]> {
    const bookModels = await this.bookService.getAll()
    return bookModels.map(BookResult.of)
  }

  @Query()
  async book(@Args() args: BookArgs): Promise<Book> {
    const bookModel = await this.bookService.getOne(args.bookId)
    return BookResult.of(bookModel)
  }
}
