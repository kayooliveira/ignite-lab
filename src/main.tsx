import { ApolloProvider } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom'

import './styles/global.css'
import { App } from './App'
import { client } from './lib/apollo'

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
