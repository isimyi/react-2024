import { useCallback, useState } from "react";

export const useCount = (initialValue = 0, minValue = 0, maxValue = 5) => {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount((currentCount) => currentCount < maxValue ? currentCount + 1 : currentCount);
  }, []);

  const decrement = useCallback(() => {
    setCount((currentCount) => currentCount > minValue ? currentCount - 1 : currentCount);
  }, []);

  return {increment, decrement, count};
}
