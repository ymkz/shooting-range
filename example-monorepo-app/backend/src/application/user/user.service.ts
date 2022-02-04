import { Injectable } from '@nestjs/common'
import { UserRepository } from '~/infrastructure/user/user.repository'

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getAll() {
    return this.userRepository.getAll()
  }

  async getOne(id: string) {
    return this.userRepository.getOne(Number(id))
  }
}
