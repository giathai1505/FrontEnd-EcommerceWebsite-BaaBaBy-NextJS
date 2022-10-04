import {
  ApolloClient,
  ApolloLink,
  ApolloError,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { getToken } from "@common/utils/auth";
import { toast } from "react-toastify";
import { onError } from "apollo-link-error";
const errorLink: any = onError(({ graphQLErrors, networkError, operation }) => {
  printErrorOfGraphQLFromServer(
    graphQLErrors?.[0]?.message || networkError?.message || "",
    operation.query,
  );
  console.group("DEBUG");
  console.log({ graphQLErrors, networkError, variables: operation.variables });
  console.groupEnd();
});
const graphqlUrl = process.env.GRAPHQL_URL || process.env.REACT_APP_GRAPHQL_URL;

const httpLink = createHttpLink({
  uri: `${graphqlUrl}/graphql`,
  headers: {
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${getToken()}`,
    withCredentials: true,
  },
  credentials: "include",
});
export const client = new ApolloClient({
  link: errorLink.concat(httpLink),
  credentials: "include",
  cache: new InMemoryCache({ addTypename: false }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "ignore",
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
    mutate: {
      errorPolicy: "all",
    },
  },
});
const printErrorOfGraphQLFromServer = (errorMessage: string, query?: any) => {
  console.log(
    `%c :warning: [GraphQL Error] ${query?.definitions[0]?.selectionSet?.selections[0]?.name?.value}`,
    "color: #D4395B; font-weight: 700; ; font-size: 13px;",
  );
  console.log(
    "%c " +
      errorMessage
        ?.split(";")
        .join("\n------ ***\n")
        .replace(/\{[\s\S].*\}/g, contents => "\n" + contents),
    "color: #D4395B",
  );
  toast.error(errorMessage);
};
