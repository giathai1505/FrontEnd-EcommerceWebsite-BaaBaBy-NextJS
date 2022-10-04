import { gql } from "apollo-boost";
import { graphQLCommon } from "@common/utils/api";
import { IResetPassword } from "@typings/Auth";

const RESET_PASSWORD = gql`
  mutation($email: String!) {
    resetPassword(email: $email)
  }
`;

export const resetPassword = async (variables: IResetPassword) => {
  const response = await graphQLCommon(RESET_PASSWORD, variables);
  return response;
};
