import { TodoEntity } from '~/graphql/repository/todo/todo.entity'

export class TodoModel {
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

  static fromEntity(todoEntity: TodoEntity): TodoModel {
    return new TodoModel(
      todoEntity.userId,
      todoEntity.id,
      todoEntity.title,
      todoEntity.completed
    )
  }
}
