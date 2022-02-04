import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Todo as PrismaTodo } from '@prisma/client'
import { TodoResult } from '~/graphql/resolver/todo/result/todo.result'

@ObjectType()
export class TodosResult {
  @Field(() => [TodoResult])
  readonly nodes: TodoResult[]

  @Field(() => Int)
  readonly totalCount: number

  constructor(init?: Partial<TodosResult>) {
    Object.assign(this, init)
  }

  static from(todos: PrismaTodo[], total: number): TodosResult {
    return new TodosResult({
      nodes: todos.map(TodoResult.from),
      totalCount: total,
    })
  }
}
