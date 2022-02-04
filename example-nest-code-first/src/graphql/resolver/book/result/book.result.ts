import { Field, ID, ObjectType } from '@nestjs/graphql'
import { BookEntity } from '~/graphql/repository/book/book.entity'

@ObjectType()
export class BookResult {
  @Field(() => ID)
  readonly id: string

  @Field()
  readonly title: string

  constructor(init?: Partial<BookResult>) {
    Object.assign(this, init)
  }

  static from(bookEntity: BookEntity): BookResult {
    return new BookResult(bookEntity)
  }
}
