import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Cancel, Check } from "@mui/icons-material";

export default function DeleteDialog({ open, setOpen, toggleConfirmDelete }) {
  const handleClose = () => {
    setOpen();
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle textAlign={"center"}>{"Delete TODO"}</DialogTitle>
        <DialogContent style={{ maxWidth: "25ch" }}>
          <DialogContentText>This action cannot be undone!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color={"warning"}>
            NO
            <Cancel />
          </Button>
          <Button
            onClick={() => {
              handleClose();
              toggleConfirmDelete();
            }}
            color={"success"}
          >
            YES
            <Check style={{ transform: "translateY(-1px)" }} />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
