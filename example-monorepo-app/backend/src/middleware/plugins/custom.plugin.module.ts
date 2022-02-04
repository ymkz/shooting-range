import { Module } from '@nestjs/common'
import { GraphqlLoggingPlugin } from '~/middleware/plugins/graphql.logging.plugin'

@Module({
  providers: [GraphqlLoggingPlugin],
})
export class CustomPluginModule {}
