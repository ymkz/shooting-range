import { Plugin } from '@nestjs/graphql'
import { GraphQLRequestContext } from 'apollo-server-core'
import {
  ApolloServerPlugin,
  GraphQLRequestListener,
} from 'apollo-server-plugin-base'

@Plugin()
export class GraphqlLoggingPlugin implements ApolloServerPlugin {
  async requestDidStart(
    ctx: GraphQLRequestContext
  ): Promise<GraphQLRequestListener> {
    console.log('Request started')
    return {
      async willSendResponse(ctx: GraphQLRequestContext) {
        console.log('Will send response')
      },
    }
  }
}
