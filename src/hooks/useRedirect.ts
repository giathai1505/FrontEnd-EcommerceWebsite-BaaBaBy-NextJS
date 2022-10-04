import { useCallback } from "react";
import { useRouter } from "next/router";

/**
 * @example ```tsx
 *  const redirect = useRedirect();
 *  //....
 *  redirect(PATH.REAL_ESTATE, { slug: "ban-nha-bds "}, { page: 1, category: "buy" })
 *  ==> /real-estate/ban-nha-bds?page=1&category=buy
 * ```
 */

export const useRedirect = () => {
  const router = useRouter();

  const redirect = useCallback(
    (
      routeName: string,
      params: object = {},
      query: object = {},
      shallow: boolean = true,
    ) => {
      let href = routeName;

      if (Object.keys(params).length) {
        for (const key in params) {
          const value = params[key];
          href = href.replace(`/:${key}`, `/${value}`);
        }
      }

      href = href.replace(/(\/:)\w+/g, "/-");

      if (Object.keys(query).length) {
        const queryString = renderQueryStringFromObject(query);
        href += `?${queryString}`;
      }

      router.push(href, undefined, { shallow });
    },
    [],
  );
  return redirect;
};

const renderQueryStringFromObject = (query: object) => {
  return new URLSearchParams(query as any)?.toString();
};
