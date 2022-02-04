import { ArgsType, Field, Int } from '@nestjs/graphql'
import { IsNotEmpty, Max, Min } from 'class-validator'

@ArgsType()
export class TodosArgs {
  @IsNotEmpty()
  @Min(1)
  @Max(10)
  @Field(() => Int)
  readonly limit: number = 10

  @IsNotEmpty()
  @Min(0)
  @Max(20)
  @Field(() => Int)
  readonly offset: number = 0

  constructor(init?: Partial<TodosArgs>) {
    Object.assign(this, init)
  }
}
