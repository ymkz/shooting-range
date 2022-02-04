import { Field, Int, ObjectType } from '@nestjs/graphql'
import { BookResult } from '~/graphql/resolver/book/result/book.result'

@ObjectType()
export class BooksResult {
  @Field(() => [BookResult])
  readonly nodes: BookResult[]

  @Field(() => Int)
  readonly totalCount: number

  constructor(init?: Partial<BookResult>) {
    Object.assign(this, init)
  }
}
