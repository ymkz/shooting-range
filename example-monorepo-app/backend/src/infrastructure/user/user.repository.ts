import { HttpService } from '@nestjs/axios'
import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { plainToClass } from 'class-transformer'
import { UserResponse } from '~/infrastructure/user/user.response'

@Injectable()
export class UserRepository {
  private static readonly API_URL = 'https://jsonplaceholder.typicode.com/users'

  constructor(private readonly httpService: HttpService) {}

  async getAll(): Promise<UserResponse[]> {
    try {
      return await this.httpService
        .get<UserResponse[]>(UserRepository.API_URL)
        .toPromise()
        .then((response) => {
          return plainToClass(UserResponse, response.data, {
            excludeExtraneousValues: true,
          })
        })
    } catch (e) {
      throw new InternalServerErrorException()
    }
  }

  async getOne(id: number): Promise<UserResponse> {
    try {
      return await this.httpService
        .get<UserResponse>(`${UserRepository.API_URL}/${id}`)
        .toPromise()
        .then((response) => {
          return plainToClass(UserResponse, response.data, {
            excludeExtraneousValues: true,
          })
        })
    } catch (e) {
      throw new InternalServerErrorException()
    }
  }
}
