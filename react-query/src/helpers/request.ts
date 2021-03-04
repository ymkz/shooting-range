const url = 'http://localhost:8080/todos'

export async function requestGetAllTodo() {
  return fetch(url).then((response) => response.json())
}

export async function requestAddTodo(body: TodoForm) {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }).then((response) => response.json())
}

export async function requestDeleteTodo(id: Todo['id']) {
  return fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
}
