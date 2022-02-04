import { Args, Query, Resolver } from '@nestjs/graphql'
import { BookArgs } from '~/graphql/resolver/book/args/book.args'
import { BookResult } from '~/graphql/resolver/book/result/book.result'
import { BooksResult } from '~/graphql/resolver/book/result/books.result'
import { BookService } from '~/graphql/service/book/book.service'

@Resolver('Book')
export class BookResolver {
  constructor(private bookService: BookService) {}

  @Query(() => BooksResult)
  async books(): Promise<BooksResult> {
    return await this.bookService.search()
  }

  @Query(() => BookResult, { nullable: true })
  async book(@Args() args: BookArgs): Promise<BookResult> {
    return await this.bookService.find(args.id)
  }
}
