import React, { createContext, useContext, useEffect } from "react";
import todoReducer from "../reducer/todo.reducer";
import { useLocalStorageReducer } from "../hooks/useLocalStorageReducer";
import { RestoreContext } from "./restore.context";

let firstLoad = true;
const defaultTodos = [
  { id: 1, task: "mow the lawns", checked: false },
  { id: 2, task: "dance a bit", checked: false },
];
export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const restore = useContext(RestoreContext);
  let [todos, dispatch] = useLocalStorageReducer(
    "todos",
    defaultTodos,
    todoReducer
  );
  useEffect(() => {
    if (!firstLoad) {
      dispatch({ type: "DELETEALL" });
      defaultTodos.map((todo) => dispatch({ type: "ADD", task: todo.task }));
    }
    firstLoad = false;
  }, [restore]);
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
