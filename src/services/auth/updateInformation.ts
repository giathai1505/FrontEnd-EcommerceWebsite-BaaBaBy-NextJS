import { ApolloQueryResult } from "@apollo/client";
import { gql } from "apollo-boost";
import {
  IGraphQLResponse,
  IUpdateUserInformationPersonal,
  IUser,
} from "@typings";
import { graphQLCommon } from "@common/utils/api";
const UPDATE_INFORMATION = gql`
  mutation($input: PersonalInformationInput!) {
    updateUserPersonalInformation(input: $input) {
      _id
      provider
      fullName
      email
      urlAvt {
        default
        medium
        small
      }
      phoneNumber
      password
      permission
    }
  }
`;
export const updateInformation = async (
  variables: IUpdateUserInformationPersonal,
): Promise<ApolloQueryResult<IUser>> => {
  const result = await graphQLCommon(UPDATE_INFORMATION, variables);
  return result;
};

export const updateInformationAPI = async (
  variables: IUpdateUserInformationPersonal,
): Promise<IUser> => {
  const response: IGraphQLResponse = await updateInformation(variables);
  const { updateUserPersonalInformation: result = null } = response?.data || {};
  if (result) return result;
  else throw response.errors?.[0].message || "";
};
