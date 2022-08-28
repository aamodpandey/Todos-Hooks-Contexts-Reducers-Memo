import React, { useContext } from "react";
import { TextField } from "@mui/material";
import { DispatchContext, TodosContext } from "./context/todos.context";
import useInputState from "./hooks/useInputState";

export default function () {
  const [inputVal, setInputVal, reset] = useInputState();
  const dispatch = useContext(DispatchContext);
  const todos = useContext(TodosContext);
  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD", task: inputVal });
    reset();
  };
  return (
    <>
      <form style={{ margin: "0 1rem" }} onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin={"normal"}
          style={{ marginBottom: !todos.length && "0" }}
          label="New todo here..."
          variant="standard"
          value={inputVal}
          onChange={setInputVal}
        />
      </form>
    </>
  );
}
