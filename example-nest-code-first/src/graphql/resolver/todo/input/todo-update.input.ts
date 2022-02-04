import { Field, ID, InputType } from '@nestjs/graphql'
import { IsNotEmpty, Length, Matches } from 'class-validator'

@InputType()
export class TodoUpdateInput {
  @IsNotEmpty()
  @Length(10, 10)
  @Matches(/^[a-z]+$/)
  @Field(() => ID)
  readonly id: string

  @IsNotEmpty()
  @Length(1, 100)
  @Field()
  readonly title: string

  constructor(init?: Partial<TodoUpdateInput>) {
    Object.assign(this, init)
  }
}
