import { ApolloQueryResult } from "@apollo/client";
import { gql } from "apollo-boost";
import { graphQLCommon } from "@common/utils/api";
import {
  IAccount,
  IGraphQLResponse,
  ILogin,
  ILoginByFacebook,
  ILoginByGoogle,
} from "@typings";

export const accountGQL = `
  accessToken
  refreshToken
  userId {
    id
  }
  userInfo {
    _id
    fullName
    email
    provider
    urlAvt {
      default
      medium
      small
    }
    phoneNumber
    permission
  }
  # challengePoint
`;

const LOGIN = gql`
  mutation ($user: LoginUserInput!) {
    login(user: $user) {
      ${accountGQL}
    }
  }
`;

export const login = async (variables: ILogin) => {
  const response = await graphQLCommon(LOGIN, variables);
  return response;
};

const LOG_IN_BY_GOOGLE = gql`
  mutation ($idToken: String!) {
    loginFirebaseGoogle(idToken: $idToken) {
      ${accountGQL}
    }
  }
`;

export const loginByGoogleService = async (
  variables: ILoginByGoogle,
): Promise<ApolloQueryResult<IAccount>> => {
  const result = await graphQLCommon(LOG_IN_BY_GOOGLE, variables);
  return result;
};

export const loginByGoogleAPI = async (
  variable: ILoginByGoogle,
): Promise<IAccount> => {
  const response: IGraphQLResponse = await loginByGoogleService(variable);
  const { loginFirebaseGoogle: result = null } = response?.data || {};
  if (result) return result;
  else throw response.errors?.[0].message || "";
};

const LOG_IN_BY_FACEBOOK = gql`
  mutation ($idToken: String!) {
    loginFirebaseFacebook(idToken: $idToken) {
      ${accountGQL}
    }
  }
`;

export const loginByFacebookService = async (
  variables: ILoginByFacebook,
): Promise<ApolloQueryResult<IAccount>> => {
  const result = await graphQLCommon(LOG_IN_BY_FACEBOOK, variables);
  return result;
};

export const loginByFacebookAPI = async (
  variable: ILoginByFacebook,
): Promise<IAccount> => {
  const response: IGraphQLResponse = await loginByFacebookService(variable);
  const { loginFirebaseFacebook: result = null } = response?.data || {};
  if (result) return result;
  else throw response.errors?.[0].message || "";
};
