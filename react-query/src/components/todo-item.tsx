import { useMutation, useQueryClient } from 'react-query'
import { requestDeleteTodo } from '~/helpers/request'
import { snackbar } from '~/helpers/snackbar'
import style from '~/styles/components/todo-item.module.css'

type Props = {
  todo: Todo
}

export function TodoItem({ todo }: Props) {
  const queryClient = useQueryClient()
  const todoMutation = useMutation(requestDeleteTodo)

  const handleDeleteTodo = async () => {
    todoMutation.mutate(todo.id, {
      onSuccess: () => {
        snackbar.success('TODO DELETED')
        queryClient.invalidateQueries('todos')
      },
      onError: () => {
        snackbar.failure('ERROR ON DELETE TODO')
      },
    })
  }

  return (
    <li className={style.container}>
      <p>Title: {todo.title}</p>
      <button onClick={handleDeleteTodo}>delete</button>
    </li>
  )
}
