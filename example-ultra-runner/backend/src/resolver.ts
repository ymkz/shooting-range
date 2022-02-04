import { MutationResolvers, QueryResolvers } from 'generated/resolvers'
import { IResolvers } from 'mercurius'
import { logger } from '~/logger'

const user: QueryResolvers['user'] = (parent, args, context, info) => {
  logger.info({ queryName: info.fieldName, args })
  return {
    id: 1,
    username: 'username',
  }
}

const users: QueryResolvers['users'] = (parent, args, context, info) => {
  logger.info({ queryName: info.fieldName, args })
  return [
    {
      id: 1,
      username: 'username',
    },
  ]
}

const createUser: MutationResolvers['createUser'] = (
  parent,
  args,
  context,
  info
) => {
  logger.info({ queryName: info.fieldName, args })
  return {
    id: 1,
    username: 'username',
  }
}

const removeUser: MutationResolvers['removeUser'] = (
  parent,
  args,
  context,
  info
) => {
  logger.info({ queryName: info.fieldName, args })
  return {
    success: true,
  }
}

const updateUser: MutationResolvers['updateUser'] = (
  parent,
  args,
  context,
  info
) => {
  logger.info({ queryName: info.fieldName, args })
  return {
    id: 1,
    username: 'username',
  }
}

const Query: QueryResolvers = {
  user,
  users,
}

const Mutation: MutationResolvers = {
  createUser,
  removeUser,
  updateUser,
}

export const resolvers: IResolvers = {
  Query,
  Mutation,
}
