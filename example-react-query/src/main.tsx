import '@snackbar/core/dist/snackbar.min.css'
import { StrictMode } from 'react'
import { render } from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Route, Switch } from 'wouter'
import { Header } from '~/components/header'
import { AboutPage } from '~/pages/about'
import { ErrorPage } from '~/pages/error'
import { IndexPage } from '~/pages/index'
import '~/styles/global.css'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 300000, // 5min
    },
  },
})

function App() {
  return (
    <StrictMode>
      <QueryClientProvider client={client}>
        <Header />
        <Switch>
          <Route path="/" component={IndexPage} />
          <Route path="/about" component={AboutPage} />
          <Route component={ErrorPage} />
        </Switch>
      </QueryClientProvider>
    </StrictMode>
  )
}

render(<App />, document.querySelector('#root'))
