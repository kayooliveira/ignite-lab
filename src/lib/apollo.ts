import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: import.meta.env.VITE_APP_GRAPHQL_API_ENDPOINT,
  cache: new InMemoryCache()
})
