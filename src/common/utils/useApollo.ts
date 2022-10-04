import { useMemo } from "react";
// import { ApolloClient } from "apollo-client";
// import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import fetch from "isomorphic-fetch";
import { createPersistedQueryLink } from "apollo-link-persisted-queries";
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

export type AppApolloClient = ApolloClient<NormalizedCacheObject>;

const graphqlUrl = process.env.GRAPHQL_URL;
let apolloClient: AppApolloClient;

const createApolloClient = (initialState: NormalizedCacheObject) => {
  const isBrowser = typeof window !== "undefined";
  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser,
    link: createPersistedQueryLink().concat(
      new HttpLink({
        uri: `${graphqlUrl}/graphql`,
        // Use fetch() polyfill on the server
        fetch: !isBrowser ? fetch : undefined,
      }),
    ) as any,
    cache: new InMemoryCache().restore(initialState || {}),
  });
};

const initializeApollo = (initialState: NormalizedCacheObject) => {
  const _apolloClient = apolloClient || createApolloClient(initialState);

  // If page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    // get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();
    // restore the cache using the data passed from getStaticProps or getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({
      ...existingCache,
      ...initialState,
    });
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;

  // create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};

export const useApollo = (initialState: NormalizedCacheObject) => {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
};
