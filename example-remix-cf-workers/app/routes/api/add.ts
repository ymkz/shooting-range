import { ActionFunction, redirect } from "remix"

export const action: ActionFunction = async ({ context, params, request }) => {
  const formData = await request.formData()
  const url = formData.get("url")
  console.log("url:", url)
  return redirect("/")
}
