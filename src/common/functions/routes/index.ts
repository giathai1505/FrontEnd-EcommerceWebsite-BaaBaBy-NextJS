import { ROOT_URL } from "@constants/app";
import { PATH } from "@routes";
// import { addQuery, mergeParams } from "@common/functions";
import { cleanObject } from "../filter";

export const renderURL = <P = object, Q = object>({
  path,
  params,
  query,
}: {
  path: string;
  params: P;
  query?: Q;
}) => {
  let url = `${ROOT_URL}${path}`;
  url = mergeParams(url, params);
  url = addQuery(url, query);

  return url;
};

export const formatParams = (param: string): string | null => {
  if (!param || param === "-") return null;
  return param;
};

const renderQueryStringFromObject = (query: object) => {
  return new URLSearchParams(query as any)?.toString();
};

export const mergeParams = (url: string, params: any) => {
  if (!params) return url;
  let href = url;
  for (const key in params) {
    const value = params[key] || "-";
    href = href.replace(`/:${key}`, `/${value}`);
  }
  href = href.replace(/(\/:)\w+/g, "/-");
  return href;
};

export const addQuery = (url: string, query: any) => {
  if (!query) return url;
  let href = url;
  if (Object.keys(query).length) {
    const queryString = renderQueryStringFromObject(cleanObject(query));
    href += `?${queryString}`;
  }
  return href;
};
