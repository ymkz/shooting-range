import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { TodoArgs } from '~/graphql/resolver/todo/args/todo.args'
import { TodosArgs } from '~/graphql/resolver/todo/args/todos.args'
import { TodoCreateInput } from '~/graphql/resolver/todo/input/todo-create.input'
import { TodoDeleteInput } from '~/graphql/resolver/todo/input/todo-delete.input'
import { TodoUpdateInput } from '~/graphql/resolver/todo/input/todo-update.input'
import { TodoResult } from '~/graphql/resolver/todo/result/todo.result'
import { TodosResult } from '~/graphql/resolver/todo/result/todos.result'
import { TodoService } from '~/graphql/service/todo/todo.service'

@Resolver('Todo')
export class TodoResolver {
  constructor(private todoService: TodoService) {}

  @Query(() => TodosResult)
  async todos(@Args() args: TodosArgs): Promise<TodosResult> {
    return await this.todoService.search(args.limit, args.offset)
  }

  @Query(() => TodoResult, { nullable: true })
  async todo(@Args() args: TodoArgs): Promise<TodoResult> {
    return await this.todoService.find(args.id)
  }

  @Mutation(() => TodoResult)
  async todoCreate(
    @Args('todoCreateInput') todoCreateInput: TodoCreateInput
  ): Promise<TodoResult> {
    return await this.todoService.create(todoCreateInput)
  }

  @Mutation(() => TodoResult)
  async todoUpdate(
    @Args('todoUpdateInput') todoUpdateInput: TodoUpdateInput
  ): Promise<TodoResult> {
    return await this.todoService.update(todoUpdateInput)
  }

  @Mutation(() => TodoResult)
  async todoDelete(
    @Args('todoDeleteInput') todoDeleteInput: TodoDeleteInput
  ): Promise<TodoResult> {
    return await this.todoService.delete(todoDeleteInput)
  }
}
