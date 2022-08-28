import { useEffect, useReducer } from "react";

// let first = true;
export function useLocalStorageReducer(key, defaultVal, reducer) {
  const [state, setState] = useReducer(reducer, defaultVal, () => {
    let value;
    try {
      value = JSON.parse(localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      value = defaultVal;
    }
    return value;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, setState];
}
