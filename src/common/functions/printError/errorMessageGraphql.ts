import { IGraphQLResponse } from "@typings";

export const errorMessageGraphql = (response: IGraphQLResponse) => {
  const errors = response?.errors || [];
  if (errors.length > 0) {
    const { message = "" } = errors[0] || {};
    return message;
  }
};
