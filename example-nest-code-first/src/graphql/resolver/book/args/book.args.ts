import { ArgsType, Field, ID } from '@nestjs/graphql'
import { IsNotEmpty, Length } from 'class-validator'

@ArgsType()
export class BookArgs {
  @IsNotEmpty()
  @Length(3, 3)
  @Field(() => ID)
  readonly id: string

  constructor(init?: Partial<BookArgs>) {
    Object.assign(this, init)
  }
}
