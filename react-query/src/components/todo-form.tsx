import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { requestAddTodo } from '~/helpers/request'
import { snackbar } from '~/helpers/snackbar'
import style from '~/styles/components/todo-form.module.css'

export function TodoForm() {
  const queryClient = useQueryClient()
  const todoMutation = useMutation(requestAddTodo)
  const { register, handleSubmit, reset } = useForm<TodoForm>()

  const submit = handleSubmit(async (data) => {
    todoMutation.mutate(data, {
      onSuccess: () => {
        reset()
        snackbar.success('TODO ADDED')
        queryClient.invalidateQueries('todos')
      },
      onError: () => {
        snackbar.failure('ERROR ON ADD TODO')
      },
    })
  })

  return (
    <form onSubmit={submit} className={style.form}>
      <div className={style.container}>
        <label htmlFor="title">Your new todo is</label>
        <input id="title" {...register('title')} />
      </div>
      <button type="submit">submit</button>
    </form>
  )
}
