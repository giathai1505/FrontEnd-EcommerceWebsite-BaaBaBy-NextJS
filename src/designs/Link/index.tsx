import { KeyboardEvent, MouseEvent } from "react";
import { useRouter } from "next/router";
import { DOMAttributes } from "react";

export interface ILinkProps extends DOMAttributes<HTMLAnchorElement> {
  path: string;
  query?: object;
  params?: object;
  disableShadow?: boolean;
  className?: string;
}

const Link: React.FC<ILinkProps> = props => {
  const router = useRouter();
  const {
    path = "",
    disableShadow = false,
    children,
    className = "",
    query = {},
    params = {},
    ...rest
  } = props;

  let href = path;

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

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!disableShadow) {
      e.preventDefault();
      router.push(href);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === "13") {
      e.preventDefault();
      router.push(href);
    }
  };

  return (
    <a
      href={href}
      className={`block cursor-pointer ${className}`}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      {...rest}
    >
      {children}
    </a>
  );
};

export default Link;

const renderQueryStringFromObject = (query: object) => {
  return new URLSearchParams(query as any)?.toString();
};
