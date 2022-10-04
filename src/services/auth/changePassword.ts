import { ApolloQueryResult } from "@apollo/client";
import { gql } from "apollo-boost";
import { IGraphQLResponse, IUpdatePassword } from "@typings";
import { graphQLCommon } from "@common/utils/api";
const CHANGE_PASSWORD = gql`
  mutation($passwordInput: ChangePasswordInput!) {
    changePassword(passwordInput: $passwordInput)
  }
`;
export const updatePassword = async (
  variables: IUpdatePassword,
): Promise<ApolloQueryResult<boolean>> => {
  const result = await graphQLCommon(CHANGE_PASSWORD, variables);
  return result;
};

export const updatePasswordAPI = async (
  variables: IUpdatePassword,
): Promise<boolean> => {
  const response: IGraphQLResponse = await updatePassword(variables);
  const { changePassword: result = null } = response?.data || {};
  if (result) return result;
  else throw response.errors?.[0].message || "";
};
