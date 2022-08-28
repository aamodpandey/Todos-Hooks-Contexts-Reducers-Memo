import React, { useContext, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { Divider, List } from "@mui/material";
import Todo from "./Todo";
import { TodosContext } from "./context/todos.context";

export default function (props) {
  const todos = useContext(TodosContext);

  return (
    <List>
      {todos.map((todo, index) => (
        <React.Fragment key={uuid()}>
          <Todo {...todo} />
          {index !== todos.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
}
