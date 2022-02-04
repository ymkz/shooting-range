import { TodoModel } from '~/graphql/service/todo/todo.model'
import { Todo } from '~/schema'

export class TodoResult {
  static of(todo: TodoModel): Todo {
    return {
      userId: todo.userId,
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
    }
  }
}
