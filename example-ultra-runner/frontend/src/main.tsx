import { StrictMode } from 'react'
import { render } from 'react-dom'
import { createClient, Provider } from 'urql'
import { IndexPage } from '~/pages'

const client = createClient({
  url: 'http://localhost:4000/graphql',
})

const App = () => {
  return (
    <StrictMode>
      <Provider value={client}>
        <IndexPage />
      </Provider>
    </StrictMode>
  )
}

render(<App />, document.querySelector('#root'))
