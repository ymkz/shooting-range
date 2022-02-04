import { Test, TestingModule } from '@nestjs/testing'
import fetch from 'jest-fetch-mock'
import { PostEntity } from '~/graphql/repository/post/post.entity'
import { PostRepository } from '~/graphql/repository/post/post.repository'
import { PostRepositoryModule } from '~/graphql/repository/post/post.repository.module'

describe('PostRepository', () => {
  let target: PostRepository

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PostRepositoryModule],
    }).compile()

    target = module.get<PostRepository>(PostRepository)
  })

  describe('getAll', () => {
    test('APIの取得結果の配列をPostEntityの配列として返却する', async () => {
      const mockResponse = [{ userId: 1, id: 1, title: 'title', body: 'body' }]

      fetch.mockResponse(JSON.stringify(mockResponse))

      const expected = [new PostEntity(1, 1, 'title', 'body')]

      const received = await target.getAll()

      expect(received).toStrictEqual(expected)
      expect(fetch.mock.calls).toHaveLength(1)
      expect(fetch.mock.calls[0][0]).toEqual(PostRepository.API_URL)
    })
  })
})
