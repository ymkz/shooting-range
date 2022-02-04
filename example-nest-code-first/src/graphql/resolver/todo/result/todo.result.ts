import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Todo as PrismaTodo } from '@prisma/client'

@ObjectType()
export class TodoResult {
  @Field(() => ID)
  readonly id: string

  @Field()
  readonly title: string

  constructor(init?: Partial<TodoResult>) {
    Object.assign(this, init)
  }

  static from(todo: PrismaTodo): TodoResult {
    return new TodoResult({
      id: todo.id,
      title: todo.title,
    })
  }
}
