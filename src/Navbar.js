import React, { useContext } from "react";
import {
  AppBar,
  Switch,
  Toolbar,
  Typography,
  Paper,
  Button,
} from "@mui/material";
import { DispatchContext } from "./context/restore.context";
import { up, down } from "./hooks/useMediaQueries";

export default function (props) {
  const dispatch = useContext(DispatchContext);
  return (
    <Paper className={"text-nowrap"}>
      <AppBar position={"static"}>
        <Toolbar
          variant="dense"
          style={{
            justifyContent: "space-between",
          }}
          sx={{ bgcolor: props.isDark && "#182980" }}
        >
          <Typography
            sx={{
              ":hover": { cursor: "pointer", opacity: "0.8" },
              letterSpacing: "1px",
              fontSize: "1.2rem",
            }}
          >
            TODO APP
          </Typography>
          <Button
            variant={"contained"}
            className={"text-bg-dark py-0 pe-0"}
            sx={{
              textTransform: "none",
              [down(570)]: {
                paddingLeft: "0.3rem",
              },
            }}
          >
            <Typography sx={{ [down(444)]: { display: "none" } }}>
              Dark Mode
            </Typography>
            <Switch
              checked={props.isDark}
              onChange={props.toggleisDark}
              sx={{
                "& .MuiSwitch-track": { bgcolor: "white", opacity: "0.9" },
              }}
            />
          </Button>

          <Button
            onClick={dispatch}
            sx={{
              [down(570)]: {
                paddingLeft: "0.2rem",
                paddingRight: "0.2rem",
                transform: "translateX(0.3rem)",
              },
            }}
          >
            <Typography
              color={"white"}
              sx={{
                letterSpacing: "1px",
                [down(570)]: {
                  fontSize: "0.9rem",
                },
              }}
            >
              Restore TODOS
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Paper>
  );
}
