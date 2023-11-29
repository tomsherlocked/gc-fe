import { useEffect, useState } from "react";

export const useDebounce = <T,>(value: T, delay = 1000) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const timeoutHandler = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(timeoutHandler);
  }, [value, delay]);
  return debouncedValue;
};
