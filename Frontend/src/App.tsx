import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { ApolloProvider } from '@apollo/client/react'
import type { ApolloClient } from '@apollo/client'
function App({ client }: { client: ApolloClient }) {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
