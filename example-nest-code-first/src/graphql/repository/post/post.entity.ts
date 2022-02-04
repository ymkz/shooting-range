export class PostEntity {
  readonly userId: number
  readonly id: number
  readonly title: string
  readonly body: string

  constructor(userId: number, id: number, title: string, body: string) {
    this.userId = userId
    this.id = id
    this.title = title
    this.body = body
  }
}
