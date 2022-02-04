import { useGetUsersQuery } from 'generated/operations'

export const Users = () => {
  const [{ data, fetching, error }] = useGetUsersQuery()

  if (fetching) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>

  return (
    <section>
      <div>users</div>
      <div>{JSON.stringify(data)}</div>
    </section>
  )
}
