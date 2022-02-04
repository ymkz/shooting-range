import { Module } from '@nestjs/common'
import { BookResolver } from '~/graphql/resolver/book/book.resolver'
import { BookServiceModule } from '~/graphql/service/book/book.service.module'

@Module({
  imports: [BookServiceModule],
  providers: [BookResolver],
})
export class BookResolverModule {}
