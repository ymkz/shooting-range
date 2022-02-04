import { BookModel } from '~/graphql/service/book/book.model'
import { Book } from '~/schema'

export class BookResult {
  static of(book: BookModel): Book {
    return {
      id: book.id,
      title: book.title,
    }
  }
}
