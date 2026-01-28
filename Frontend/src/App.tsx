import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { ApolloProvider } from '@apollo/client/react'
import type { ApolloClient } from '@apollo/client'
import { ToastContainer } from 'react-toastify'
function App({ client }: { client: ApolloClient }) {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AppRoutes />
        <ToastContainer position='top-center' autoClose={1000} />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
