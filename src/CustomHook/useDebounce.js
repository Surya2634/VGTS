import { useState, useEffect } from "react";

const useDebounce = (value, timeout, callback) => {
  const [state, setState] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (callback) {
        callback();
      } else {
        setState(value);
      }
    }, timeout);
    return () => clearTimeout(handler);
  }, [value, timeout, callback]);

  return state;
};

export default useDebounce;
