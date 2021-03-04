import { useQuery } from 'react-query'
import { TodoForm } from '~/components/todo-form'
import { TodoItem } from '~/components/todo-item'
import { requestGetAllTodo } from '~/helpers/request'
import { snackbar } from '~/helpers/snackbar'
import layout from '~/styles/pages/index.module.css'

export function IndexPage() {
  const todoQuery = useQuery<Todo[]>('todos', requestGetAllTodo, {
    onError: (error) => {
      console.error(error)
      snackbar.failure('ERROR ON GET ALL TODO')
    },
  })

  return (
    <main className={layout.container}>
      <TodoForm />
      <ul className={layout.list}>
        {todoQuery.data?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </main>
  )
}
