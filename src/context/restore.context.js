import React, { createContext } from "react";
import useToggleState from "../hooks/useToggleState";

export const RestoreContext = createContext();
export const DispatchContext = createContext();

export function RestoreProvider(props) {
  const [restore, toggleRestore] = useToggleState();
  return (
    <RestoreContext.Provider value={restore}>
      <DispatchContext.Provider value={toggleRestore}>
        {props.children}
      </DispatchContext.Provider>
    </RestoreContext.Provider>
  );
}
