import React from "react";
import Navbar from "./Navbar";
import TodoApp from "./TodoApp";
import { RestoreProvider } from "./context/restore.context";
import useLocalStorageDark from "./hooks/useLocalStorageDark";
import "@fontsource/roboto/400.css";
import "./styles.scss";

function App() {
  const [isDark, toggleisDark] = useLocalStorageDark(
    localStorage.getItem("dark") || "false"
  );
  return (
    <div className={`App ${isDark && "bg-dark"}`} style={{ height: "100vh" }}>
      <RestoreProvider>
        <Navbar {...{ toggleisDark, isDark }} />
        <TodoApp isDark={isDark} />
      </RestoreProvider>
    </div>
  );
}

export default App;
