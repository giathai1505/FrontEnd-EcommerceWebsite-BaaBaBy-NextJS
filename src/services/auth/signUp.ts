import { gql } from "apollo-boost";
import { ApolloQueryResult } from "@apollo/client";
import { IGraphQLResponse, IAccount, ISignUp } from "@typings";
import { graphQLCommon } from "@common/utils/api";
import { accountGQL } from ".";

const SIGN_UP = gql`
    mutation ($user: SignUpInput!) {
    signUp(user: $user) {
      ${accountGQL}    
    }
  }
`;

export const signUpService = async (
  variables: ISignUp,
): Promise<ApolloQueryResult<IAccount>> => {
  const result = await graphQLCommon(SIGN_UP, variables);
  return result;
};

export const signUpAPI = async (variable: ISignUp): Promise<IAccount> => {
  const response: IGraphQLResponse = await signUpService(variable);
  const { signUp: result = null } = response?.data || {};
  if (result) return result;
  else throw response.errors?.[0].message || "";
};
