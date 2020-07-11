import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';

const delay = setContext(
  (request) =>
    new Promise((success, fail) => {
      setTimeout(() => {
        success();
      }, 0);
      // }, 800);
    })
);

const cache = new InMemoryCache();
const http = new HttpLink({
  uri: 'http://localhost:4000/',
});

const link = ApolloLink.from([delay, http]);

const client = new ApolloClient({
  link,
  cache,
});

export default client;