import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, Length } from 'class-validator'

@InputType()
export class TodoCreateInput {
  @IsNotEmpty()
  @Length(1, 100)
  @Field()
  readonly title: string

  constructor(init?: Partial<TodoCreateInput>) {
    Object.assign(this, init)
  }
}
