import { ApolloQueryResult } from "@apollo/client";

export type IGraphQLResponse = ApolloQueryResult<any>;

export type IAction = "GET" | "CREATE" | "UPDATE" | "DELETE" | "";

export interface IGetBySlug {
  slug: string;
}

export interface IGetById {
  id: IMongoObjectId;
}

export interface IGetByLanguage {
  language: string;
}

export interface IGetByLimit {
  limit: number;
}

export interface IListResponseResult<T> {
  results: T[];
  totalCount: number;
}
