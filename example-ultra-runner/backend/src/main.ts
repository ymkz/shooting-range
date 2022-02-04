import fastify from 'fastify'
import cors from 'fastify-cors'
import mercurius from 'mercurius'
import { loadSchemaFiles } from 'mercurius-codegen'
import { logger } from '~/logger'
import { resolvers } from '~/resolver'

const port = Number(process.env.PORT) || 4000

const bootstrap = async () => {
  const app = await fastify()

  const { schema } = loadSchemaFiles('../definition/schema/**/*.gql')

  await app.register(cors)

  await app.register(mercurius, {
    schema,
    resolvers,
    graphiql: true,
    path: '/graphql',
  })

  app.graphql.addHook('preParsing', async (schema, source, context) => {
    logger.info('incoming request')
  })

  app.graphql.addHook('onResolution', async (execution, context) => {
    logger.info('completed request')
  })

  app.get('/healthz', async (request, reply) => {
    return 'OK'
  })

  app.listen(port)
}

bootstrap()
  .then(() => {
    logger.info(`Server listening at http://localhost:${port}`)
    logger.info(`Healthcheck endpoint at http://localhost:${port}/healthz`)
    logger.info(`GraphQL endpoint at http://localhost:${port}/graphql`)
    logger.info(`GraphQL playground at http://localhost:${port}/graphiql`)
  })
  .catch((error) => {
    logger.fatal(`Server bootstrap failure caused: ${error}`)
  })
