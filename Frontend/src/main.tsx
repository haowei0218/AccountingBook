import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloClient, HttpLink, InMemoryCache, gql } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'
import './index.css'
import App from './App.tsx'

export const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4040/graphql' }),
  cache: new InMemoryCache(),
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App client={client} />
  </StrictMode>
)
