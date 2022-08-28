import useToggleState from "./useToggleState";
import {useEffect} from "react";

export default function (initialState) {
  let [state, toggleState] = useToggleState(initialState !== "false");
  useEffect(() => localStorage.setItem("dark", state));
  let toggleDark = () => {
    toggleState();

  };
  return [state, toggleDark];
}
