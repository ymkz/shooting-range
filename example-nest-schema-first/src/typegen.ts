import { GraphQLDefinitionsFactory } from '@nestjs/graphql'
import { join } from 'path'

const definitionsFactory = new GraphQLDefinitionsFactory()

definitionsFactory.generate({
  typePaths: ['./src/graphql/schema/**/*.graphql'],
  path: join(process.cwd(), 'src/schema.ts'),
  outputAs: 'class',
})
