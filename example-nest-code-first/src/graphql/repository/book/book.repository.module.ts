import { Module } from '@nestjs/common'
import { BookRepository } from '~/graphql/repository/book/book.repository'

@Module({
  providers: [BookRepository],
  exports: [BookRepository],
})
export class BookRepositoryModule {}
