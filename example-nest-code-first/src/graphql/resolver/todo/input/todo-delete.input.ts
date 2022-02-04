import { Field, ID, InputType } from '@nestjs/graphql'
import { IsNotEmpty, Length, Matches } from 'class-validator'

@InputType()
export class TodoDeleteInput {
  @IsNotEmpty()
  @Length(10, 10)
  @Matches(/^[a-z]+$/)
  @Field(() => ID)
  readonly id: string

  constructor(init?: Partial<TodoDeleteInput>) {
    Object.assign(this, init)
  }
}
