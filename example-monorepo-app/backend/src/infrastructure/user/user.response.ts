import { Expose } from 'class-transformer'

export class UserResponse {
  @Expose()
  readonly id: number

  @Expose()
  readonly username: string

  constructor(id: number, username: string) {
    this.id = id
    this.username = username
  }
}
