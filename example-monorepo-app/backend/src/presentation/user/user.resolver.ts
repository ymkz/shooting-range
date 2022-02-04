import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import type {
  MutationCreateUserArgs,
  QueryUserArgs,
  User,
} from 'generated/resolvers'
import { UserService } from '~/application/user/user.service'

const data: User[] = [
  { id: 'id_1', username: 'john.doe' },
  { id: 'id_2', username: 'hello' },
]

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query()
  async users(): Promise<User[]> {
    const result = await this.userService.getAll()
    console.log(result)
    return data
  }

  @Query()
  async user(@Args() args: QueryUserArgs): Promise<User> {
    const result = await this.userService.getOne(args.id)
    console.log(result)
    return data[0]
  }

  @Mutation()
  async createUser(@Args() args: MutationCreateUserArgs): Promise<User> {
    return data[0]
  }
}
