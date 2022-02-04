import { ArgsType, Field, ID } from '@nestjs/graphql'
import { IsNotEmpty, Length, Matches } from 'class-validator'

@ArgsType()
export class TodoArgs {
  @IsNotEmpty()
  @Length(10, 10)
  @Matches(/^[a-z]+$/)
  @Field(() => ID)
  readonly id: string

  constructor(init?: Partial<TodoArgs>) {
    Object.assign(this, init)
  }
}
