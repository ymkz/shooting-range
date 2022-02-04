export class TodoEntity {
  readonly userId: number
  readonly id: number
  readonly title: string
  readonly completed: boolean

  constructor(userId: number, id: number, title: string, completed: boolean) {
    this.userId = userId
    this.id = id
    this.title = title
    this.completed = completed
  }
}
