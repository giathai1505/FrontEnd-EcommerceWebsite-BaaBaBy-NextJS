import { setIsUpdateLocalStorage } from "@redux/slides/_config";
import { IRootState } from "@redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const dispatch = useDispatch();
  const { isUpdateLocalStorage } = useSelector(
    (state: IRootState) => state._config,
  );

  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    if (!isUpdateLocalStorage) return;
    try {
      const item = window.localStorage.getItem(key);
      setStoredValue(item ? JSON.parse(item) : initialValue);
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setIsUpdateLocalStorage(false));
    }
  }, [isUpdateLocalStorage]);

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));

      dispatch(setIsUpdateLocalStorage(true));
    } catch (error) {
      console.error(error);
    }
  };
  return [storedValue, setValue, isUpdateLocalStorage] as const;
};
