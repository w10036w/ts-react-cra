import { DataProxy } from 'apollo-cache';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { BatchHttpLink } from 'apollo-link-batch-http';
import { withClientState } from 'apollo-link-state';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { IntlProvider } from 'react-intl';
import messages from './i18n/en';
import Router from './Router';
// import { ApolloLink } from 'apollo-link'

const inMemoryCache = new InMemoryCache()
const link = new BatchHttpLink({
  uri: 'http://localhost:8000/graphql',
  includeExtensions: false,
  // headers: {},
  // credentials: 'include'  // for cookie
  batchInterval: 100,
  batchMax: 20,
})
const stateLink = withClientState({
  cache: inMemoryCache,
  resolvers: {
    Mutation: {
      updateNetworkStatus: (
        _: any,
        { isConnected }: { isConnected: any },
        { cache }: { cache: DataProxy }
      ) => {
        const data = {
          networkStatus: {
            __typename: 'NetworkStatus',
            isConnected,
          },
        }
        cache.writeData({ data })
        return null
      },
    },
  },
})
const client = new ApolloClient({
  cache: inMemoryCache,
  // connectToDevTools: true,
  link: ApolloLink.from([stateLink, link]),
  // for SSR
  // ssrForceFetchDelay: 100,
  // ssrMode: true,
  // here we're initializing the cache with the data from the server's cache
  // cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
})

class App extends React.Component {
  public langCode = 'en'
  public render() {
    return (
      <ApolloProvider client={client}>
        <IntlProvider locale={this.langCode} messages={messages}>
          <Router />
        </IntlProvider>
      </ApolloProvider>
    )
  }
}

export default App
