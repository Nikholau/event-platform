import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl54i7gjs38op01ug0mat73h6/master',
  cache: new InMemoryCache()
})