import { Injectable } from '@nestjs/common'
import { BookRepository } from '~/graphql/repository/book/book.repository'
import { BookModel } from '~/graphql/service/book/book.model'

@Injectable()
export class BookService {
  constructor(private bookRepository: BookRepository) {}

  async getAll(): Promise<BookModel[]> {
    const bookEntities = await this.bookRepository.getAll()
    const bookModels = bookEntities.map(BookModel.fromEntity)
    return bookModels
  }

  async getOne(id: string): Promise<BookModel> {
    const bookEntity = await this.bookRepository.getOne(id)
    const bookModel = BookModel.fromEntity(bookEntity)
    return bookModel
  }
}
