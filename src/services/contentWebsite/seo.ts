import { gql } from "apollo-boost";
import { ApolloQueryResult } from "@apollo/client";
import { IGetById, IGraphQLResponse, ISEO } from "@typings";
import { graphQLCommon } from "@common/utils/api";

const GET_SEO = gql`
  query($id: String!) {
    getSeo(id: $id) {
      _id
      seoTitle
      seoKeyword
      author
      seoSiteMap
      seoDescription
      contentFooter
      createdAt
      updatedAt
      address
    }
  }
`;

export const getSEOService = async (
  variables: IGetById,
): Promise<ApolloQueryResult<ISEO>> => {
  const result = await graphQLCommon(GET_SEO, variables);
  return result;
};

export const getSeoAPI = async (variable: IGetById): Promise<ISEO> => {
  const response: IGraphQLResponse = await getSEOService(variable);
  const { getSeo: result = null } = response?.data || {};
  if (result) return result;
  else throw response.errors?.[0].message || "";
};
