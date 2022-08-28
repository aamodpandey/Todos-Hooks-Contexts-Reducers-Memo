import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { Paper } from "@mui/material";
import { TodosProvider } from "./context/todos.context";
import { down } from "./hooks/useMediaQueries";

export default function () {
  return (
    <Paper
      className="mx-auto mt-3 w-75"
      sx={{ [down(600)]: { width: "90% !important" } }}
    >
      <TodosProvider>
        <TodoForm />
        <TodoList />
      </TodosProvider>
    </Paper>
  );
}
