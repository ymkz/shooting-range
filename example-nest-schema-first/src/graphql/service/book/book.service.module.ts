import { Module } from '@nestjs/common'
import { BookRepositoryModule } from '~/graphql/repository/book/book.repository.module'
import { BookService } from '~/graphql/service/book/book.service'

@Module({
  imports: [BookRepositoryModule],
  providers: [BookService],
  exports: [BookService],
})
export class BookServiceModule {}
