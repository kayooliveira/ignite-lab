import { ApolloProvider } from '@apollo/client'
import React from 'react'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'

import { client } from './lib/apollo'
import { Router } from './Router'

export function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}
