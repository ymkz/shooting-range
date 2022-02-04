import { Module } from '@nestjs/common'
import { PostRepository } from '~/graphql/repository/post/post.repository'

@Module({
  providers: [PostRepository],
  exports: [PostRepository],
})
export class PostRepositoryModule {}
