import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_GRAPHQL_URL,
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

export default client