import { Injectable } from '@nestjs/common'
import { BookEntity } from '~/graphql/repository/book/book.entity'

@Injectable()
export class BookRepository {
  bookEntities: BookEntity[]

  constructor() {
    const b1 = new BookEntity('b_1', 'book_title_1')
    const b2 = new BookEntity('b_2', 'book_title_2')
    const b3 = new BookEntity('b_3', 'book_title_3')
    this.bookEntities = [b1, b2, b3]
  }

  async findMany(): Promise<{ result: BookEntity[]; total: number }> {
    return {
      result: this.bookEntities,
      total: this.bookEntities.length,
    }
  }

  async findOne(id: string): Promise<BookEntity> {
    return this.bookEntities.find((bookEntity) => bookEntity.id === id)
  }
}
