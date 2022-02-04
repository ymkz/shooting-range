import { ArgsType, Field } from '@nestjs/graphql'

@ArgsType()
export class BooksArgs {
  @Field({ nullable: true })
  readonly title?: string

  constructor(init?: Partial<BooksArgs>) {
    Object.assign(this, init)
  }
}
