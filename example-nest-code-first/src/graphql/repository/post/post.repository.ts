import { Injectable, Logger } from '@nestjs/common'
import { plainToClass } from 'class-transformer'
import fetch from 'node-fetch'
import { PostEntity } from '~/graphql/repository/post/post.entity'

@Injectable()
export class PostRepository {
  static readonly API_URL =
    'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5'

  async getAll(): Promise<PostEntity[]> {
    try {
      const json = await fetch(PostRepository.API_URL).then((res) => res.json())
      const postEntities = plainToClass(PostEntity, json as PostEntity[])
      return postEntities
    } catch (exception) {
      Logger.error(exception)
    }
  }
}
