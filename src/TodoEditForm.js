import React, { useContext } from "react";
import { IconButton, TextField } from "@mui/material";
import useInputState from "./hooks/useInputState";
import { Cancel } from "@mui/icons-material";
import { DispatchContext } from "./context/todos.context";

export default function ({ id, task, toggleEditing }) {
  const dispatch = useContext(DispatchContext);
  const [inputVal, setInputVal] = useInputState(task);
  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "EDIT", id: id, task: inputVal });
    toggleEditing();
  };
  return (
    <>
      <form className={"flex-grow-1 "} onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setInputVal(e)}
          fullWidth
          value={inputVal}
          variant={"standard"}
        />
      </form>
      <IconButton onClick={toggleEditing}>
        <Cancel />
      </IconButton>
    </>
  );
}
