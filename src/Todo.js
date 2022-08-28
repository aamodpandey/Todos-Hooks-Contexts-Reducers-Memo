import React, { useContext, useEffect, memo } from "react";
import {
  Checkbox,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import useToggleState from "./hooks/useToggleState";
import TodoEditForm from "./TodoEditForm";
import { DispatchContext } from "./context/todos.context";
import DeleteDialog from "./DeleteDialog";
import { down } from "./hooks/useMediaQueries";

function Todo({ id, task, checked }) {
  const [open, setOpen] = useToggleState();
  const [editing, toggleEditing] = useToggleState();
  const [confirmDelete, toggleConfirmDelete] = useToggleState();
  const dispatch = useContext(DispatchContext);
  useEffect(() => {
    if (confirmDelete) dispatch({ type: "DELETE", id: id });
  }, [confirmDelete]);
  return (
    <>
      <ListItem>
        {!editing ? (
          <>
            <Checkbox
              className={"ps-0"}
              checked={checked}
              onClick={() => dispatch({ type: "TOGGLE", id: id })}
            />
            <ListItemText
              style={{ textDecoration: checked && "line-through" }}
              sx={{
                "& .MuiTypography-root": {
                  width: "calc(100% - 100px)",
                  wordWrap: "break-word",
                },
              }}
            >
              {task}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton onClick={toggleEditing}>
                <Edit className={"me-2"} />
              </IconButton>
              <IconButton
                onClick={() => {
                  if (confirmDelete) {
                    dispatch({ type: "DELETE", id: id });
                  }
                  setOpen();
                }}
              >
                <Delete
                  sx={{
                    [down(444)]: {
                      paddingLeft: 0,
                      paddingRight: 0,
                    },
                  }}
                />
              </IconButton>
              <DeleteDialog {...{ open, setOpen, toggleConfirmDelete }} />
            </ListItemSecondaryAction>
          </>
        ) : (
          <TodoEditForm {...{ id, task, toggleEditing }} />
        )}
      </ListItem>
    </>
  );
}

export default memo(Todo);
