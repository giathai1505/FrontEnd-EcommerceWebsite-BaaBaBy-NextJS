import { useState } from "react";
import AwesomeDebouncePromise from "awesome-debounce-promise";
import useConstant from "./useConstant";
import { useAsync } from "./useAsync";

export function useDebouncedState<T = any>(
  defaultValue: T,
  searchFunction: (state: T) => void,
  timeDebounced = 300,
) {
  const [state, setState] = useState<T>(defaultValue);

  const callbackFunc = useConstant<any>(() =>
    AwesomeDebouncePromise(searchFunction, timeDebounced),
  );

  useAsync(async () => {
    callbackFunc(state) as T[];
  }, [callbackFunc, state]);

  return [state, setState as any];
}
