import { gql } from "apollo-boost";
import { ApolloQueryResult } from "@apollo/client";
import {
  IGraphQLResponse,
  IGetAllContentWebsite,
  IContentWebsite,
  IListResponseResult,
} from "@typings";
import { graphQLCommon } from "@common/utils/api";

const GET_CONTENT_WEBSITE = gql`
  query {
    getAllGeneralSetting(filterGeneralSetting: null, size: 1, page: 0) {
      results {
        _id
        homepageImage {
          default
          small
          base64Image
        }
        logoWhite {
          default
          small
          base64Image
        }
        logoColor {
          default
          small
          base64Image
        }
        favIcon {
          default
          small
          base64Image
        }
        contactAddress
        email
        address
        phoneNumber
        contentFooter
        codeHeader
        createdAt
        updatedAt
      }
    }
  }
`;

export const getContentWebsiteService = async (
  variables: IGetAllContentWebsite,
): Promise<ApolloQueryResult<IListResponseResult<IContentWebsite>>> => {
  const result = await graphQLCommon(GET_CONTENT_WEBSITE, variables);
  return result;
};

export const getContentWebsiteAPI = async (
  variable: IGetAllContentWebsite,
): Promise<IListResponseResult<IContentWebsite>> => {
  const response: IGraphQLResponse = await getContentWebsiteService(variable);
  const { getAllGeneralSetting: result = null } = response?.data || {};
  if (result) return result;
  else throw response.errors?.[0].message || "";
};
