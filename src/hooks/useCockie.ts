import { useEffect, useState } from "react";
import Cookies, { CookieSetOptions } from "universal-cookie";

const cookies = new Cookies();

export const useCookie = <T>(key: string) => {
  const [cookieValue, setCookieValue] = useState<T | null>(null);

  useEffect(() => {
    setCookieValue(cookies.get<T>(key) || null);
  }, []);

  const setValue = (value: T, options?: CookieSetOptions) => {
    cookies.set(key, value, options);
    setCookieValue(value);
  };

  const removeItem = (options?: CookieSetOptions) => {
    cookies.remove(key, options);
  };

  return [cookieValue, setValue, removeItem] as const;
};
