import { Injectable } from '@nestjs/common'
import { Prisma, Todo as PrismaTodo } from '@prisma/client'
import { PrismaRepository } from '~/graphql/repository/prisma/prisma.repository'

@Injectable()
export class TodoRepository extends PrismaRepository {
  async findMany(
    args?: Prisma.TodoFindManyArgs
  ): Promise<{ result: PrismaTodo[]; total: number }> {
    const [result, total] = await Promise.all([
      this.todo.findMany(args),
      this.todo.count({ where: args?.where }),
    ])

    return { result, total }
  }

  async findOne(args: Prisma.TodoFindUniqueArgs): Promise<PrismaTodo | null> {
    const result = await this.todo.findUnique(args)

    return result
  }

  async createOne(data: Prisma.TodoCreateInput): Promise<PrismaTodo> {
    const result = await this.todo.create({ data })

    return result
  }

  async updateOne(
    id: string,
    data: Prisma.TodoUpdateInput
  ): Promise<PrismaTodo> {
    const result = await this.todo.update({ where: { id }, data })

    return result
  }

  async deleteOne(id: string): Promise<PrismaTodo> {
    const result = await this.todo.delete({ where: { id } })

    return result
  }
}
