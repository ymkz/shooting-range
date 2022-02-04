import { BookEntity } from '~/graphql/repository/book/book.entity'

export class BookModel {
  readonly id: string
  readonly title: string

  constructor(id: string, title: string) {
    this.id = id
    this.title = title
  }

  static fromEntity(bookEntity: BookEntity): BookModel {
    return new BookModel(bookEntity.id, bookEntity.title)
  }
}
