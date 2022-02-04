import { Form, LoaderFunction, useLoaderData } from "remix"

export const loader: LoaderFunction = async ({ context, params, request }) => {
  console.log(ENVIRONMENT)
  return { data: [] }
}

export default function Index() {
  const data = useLoaderData()
  console.log("data:", data)
  return (
    <div id="root">
      <div>Index</div>
      <Form method="post" action="/api/add" reloadDocument>
        <div>
          <label htmlFor="url">url</label>
          <input id="url" type="url" name="url" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </div>
  )
}
