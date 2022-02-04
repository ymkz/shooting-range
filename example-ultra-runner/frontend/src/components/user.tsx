import { useGetUserQuery } from 'generated/operations'

export const User = () => {
  const [{ data, fetching, error }] = useGetUserQuery({
    variables: { id: 1 },
  })

  if (fetching) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>

  return (
    <section>
      <div>user(id: 1)</div>
      <div>{JSON.stringify(data)}</div>
    </section>
  )
}
