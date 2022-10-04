import { useEffect, useRef, useState } from "react";

export const useClickOutSide = (initState: boolean, defaultState?: boolean) => {
  const [isVisible, setElementVisible] = useState<boolean>(
    defaultState || initState,
  );
  const elementRef = useRef<HTMLDivElement | null>(null);
  const handleKeyDropdown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      if (defaultState) {
        setElementVisible(defaultState);
      } else {
        setElementVisible(false);
      }
    }
  };
  const handleClickOutSide = (e: Event) => {
    if (elementRef.current && !elementRef.current.contains(e.target as Node)) {
      if (defaultState) {
        setElementVisible(defaultState);
      } else {
        setElementVisible(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDropdown);
    document.addEventListener("click", handleClickOutSide);
    return () => {
      document.removeEventListener("keydown", handleKeyDropdown);
      document.removeEventListener("click", handleClickOutSide);
    };
  }, [isVisible]);

  return { elementRef, isVisible, setElementVisible };
};
